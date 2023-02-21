using Google.Apis.Http;
using Google.Apis.Services;
using MyApp.Backend.Models;
using Newtonsoft.Json;
using System.Net.Http.Headers;

namespace MyApp.Backend.Logic
{
    public class AuthLogic
    {
        public async static Task<User> SsoLogin(Enums.SsoType ssoTypeId, string userSsoId, string ssoAccessToken, string firstName, string lastName)
        {
            if (ssoTypeId == Enums.SsoType.Google)
            {
                dynamic userInfo = await UserLogic.GetUserInfoGoogle(ssoAccessToken);
                firstName = userInfo.given_name;
                lastName = userInfo.family_name;
            }
            User user = UserLogic.GetUserBySsoId(userSsoId);
            if (user.Id > 0)
            {
                user.IsFirstLogin = false;
                return user;
            }
            else
            {
                long newUserId = await UserLogic.CreateNewUserBySsoId(ssoTypeId, userSsoId, ssoAccessToken, firstName, lastName);
                User newUser = UserLogic.GetUser(newUserId);
                newUser.IsFirstLogin = true;
                return newUser;
            }
        }
    }
}
