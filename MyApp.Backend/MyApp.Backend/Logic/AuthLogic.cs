using MyApp.Backend.Models;
using MyApp.Backend.Repositories;
using MySqlConnector;
using System.Data;

namespace MyApp.Backend.Logic
{
    public class AuthLogic
    {
        public async static Task<User> SsoLogin(Enums.SsoType ssoTypeId, string userSsoId, string ssoAccessToken, string firstName, string lastName)
        {
            User user = UserLogic.GetUserBySsoId(userSsoId);
            if (user.Id > 0)
            {
                return user;
            }
            else
            {
                long newUserId = await UserLogic.CreateNewUserBySsoId(ssoTypeId, userSsoId, ssoAccessToken, firstName, lastName);
                return UserLogic.GetUser(newUserId);
            }
        }
    }
}
