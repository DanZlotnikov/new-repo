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
            string s3BucketBaseUrl = ConfigrationHelper.AppSetting("AWS:S3:ChambersBucket:BaseUrl");
            
            long newUserId = UserDataAccess.CreateUser(firstName, lastName, DateTime.UtcNow, (int)ssoType, ssoUserId);
            string newUserImgFileName = $"{newUserId}_profile_img";
            string externalSsoProfileImgUrl = GetProfileImageUrl(ssoType, ssoAccessToken, ssoUserId).Result;
            
            await AWSUtils.UploadFileToS3(newUserImgFileName, ConfigrationHelper.AppSetting("AWS:S3:ChambersBucket:UserProfileImagesPath"), newUserImgFileName, externalUrlFile: externalSsoProfileImgUrl);
            UserDataAccess.UpdateUserProfileImg(newUserId, $"{s3BucketBaseUrl}/{ConfigrationHelper.AppSetting("AWS:S3:ChambersBucket:UserProfileImagesPath")}/{newUserImgFileName}");
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
                var response = await client.GetAsync($"{ConfigrationHelper.AppSetting("SSO:GoogleApiUserinfoUrl")}?access_token={accessToken}");
                var jsonStr = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<dynamic>(jsonStr).picture;
            }
            else
            {
                return "";
            }
        }

        
    }
}
