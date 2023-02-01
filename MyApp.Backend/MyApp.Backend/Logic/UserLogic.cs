using MyApp.Backend.Models;
using MyApp.Backend.Repositories;
using MySqlConnector;
using System.Data;

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
    }
}
