using MyApp.Backend.Models;

namespace MyApp.Backend.Logic
{
    public class AuthLogic
    {
        public async static Task<User> SsoLogin(Enums.SsoType ssoTypeId, string userSsoId, string ssoAccessToken, string firstName, string lastName)
        {
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
