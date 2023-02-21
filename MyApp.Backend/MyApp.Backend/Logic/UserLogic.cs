using MyApp.Backend.Models;
using MyApp.Backend.Repositories;
using Newtonsoft.Json;
using System.Data;
using MyApp.Backend.Utils;

namespace MyApp.Backend.Logic
{
    public class UserLogic
    {
        public static User GetUser(long id)
        {
            User user = new User();
            DataTable table = UserDataAccess.GetUser(id);

            if (table.Rows.Count > 0)
            {
                DataRow row = table.Rows[0];
                user.Id = (long)row["id"];
                user.firstName = row["first_name"].ToString();
                user.LastName = row["last_name"].ToString();
                user.IsVerified = (bool)row["is_verified"];
                user.ProfileImgUrl = row["profile_img_url"].ToString();
            }
            return user;
        }

        public static User GetUserBySsoId(string ssoUserId)
        {
            User user = new User();
            DataTable table = UserDataAccess.GetUserBySsoId(ssoUserId);

            if (table.Rows.Count > 0)
            {
                DataRow row = table.Rows[0];
                user.Id = (long)row["user_id"];
                user.firstName = row["first_name"].ToString();
                user.LastName = row["last_name"].ToString();
                user.IsVerified = (bool)row["is_verified"];
                user.ProfileImgUrl = row["profile_img_url"].ToString();
                if (string.IsNullOrEmpty(user.ProfileImgUrl))
                {
                    user.ProfileImgUrl = ConfigrationHelper.AppSetting("DefaultProfileImageUrl");
                }
            }
            return user;
        }

        public async static Task<long> CreateNewUserBySsoId(Enums.SsoType ssoType, string ssoUserId, string ssoAccessToken, string firstName, string lastName)
        {
            long newUserId = UserDataAccess.CreateUser(firstName, lastName, DateTime.UtcNow, (int)ssoType, ssoUserId);
            string externalSsoProfileImgUrl = GetProfileImageUrl(ssoType, ssoAccessToken, ssoUserId).Result;
            string profileImgUrl = await AWSUtils.UploadFileToS3($"{newUserId}_profile_img", ConfigrationHelper.AppSetting("AWS:S3:BucketChambers:UserProfileImagesPath"), externalUrlFile: externalSsoProfileImgUrl);
            UserDataAccess.UpdateUserProfileImg(newUserId, profileImgUrl);
            return newUserId;
        }

        private static async Task<string> GetProfileImageUrl(Enums.SsoType ssoType, string accessToken, string userId)
        {
            var client = new HttpClient();
            if (ssoType == Enums.SsoType.Facebook)
            {
                var response = await client.GetAsync($"{ConfigrationHelper.AppSetting("SSO:FacebookGraphUrl")}/{userId}/picture?access_token={accessToken}&type=large");
                var imageUrl = response.RequestMessage.RequestUri.ToString();
                return imageUrl;
            }
            else if (ssoType == Enums.SsoType.Google)
            {
                dynamic userInfo = await GetUserInfoGoogle(accessToken);
                return userInfo.picture;
            }
            else
            {
                return "";
            }
        }

        public async static Task<dynamic> GetUserInfoGoogle(string accessToken)
        {
            var response = await new HttpClient().GetAsync($"{ConfigrationHelper.AppSetting("SSO:GoogleApiUserinfoUrl")}?access_token={accessToken}");
            var jsonStr = response.Content.ReadAsStringAsync().Result;
            return JsonConvert.DeserializeObject<dynamic>(jsonStr);
        }
    }
}
