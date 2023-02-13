using MyApp.Backend.Models;
using MySqlConnector;
using System;
using System.ComponentModel.Design;
using System.Data;
using System.IO;
using System.Net.NetworkInformation;
using System.Reflection;

namespace MyApp.Backend.Repositories
{
    public class UserDataAccess : BaseDataAccess
    {

        private readonly IConfiguration _configuration;

        public UserDataAccess(IConfiguration iconfig) : base(iconfig)
        {
            _configuration = iconfig;
        }

        public static DataTable GetUser(long userId)
        {
            DataTable table = new DataTable();
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"SELECT * FROM users where id = ?user_id;";
                command.Connection = connection;
                command.Parameters.AddWithValue("user_id", userId);

                MySqlDataAdapter da = new MySqlDataAdapter(command);

                da.Fill(table);
            }
            return table;
        }

        public static DataTable GetUserBySsoId(string ssoUserId)
        {
            DataTable table = new DataTable();
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"SELECT 
	                                        u.id as user_id, 
	                                        u.first_name, 
	                                        u.last_name, 
	                                        u.is_verified,
	                                        u.profile_img_url
                                        FROM user_identities ui 
                                        JOIN users u 
	                                        ON u.id = ui.user_id
                                        WHERE ui.sso_user_id = ?sso_user_id;";
                command.Connection = connection;
                command.Parameters.AddWithValue("sso_user_id", ssoUserId);
                MySqlDataAdapter da = new MySqlDataAdapter(command);
                da.Fill(table);
            }
            return table;
        }

        public static long CreateUser(string firstName, string lastName, DateTime createdTime, int ssoTypeId = 0, string ssoUserId = "")
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        INSERT INTO users 
                                        ( 
                                            first_name, 
                                            last_name,
                                            created_time,
                                            updated_time
                                        ) 
                                        VALUES 
                                        ( 
                                            ?first_name, 
                                            ?last_name,
                                            ?created_time,
                                            ?updated_time
                                        );";
                command.Connection = connection;
                command.Parameters.AddWithValue("first_name", firstName);
                command.Parameters.AddWithValue("last_name", lastName);
                command.Parameters.AddWithValue("created_time", createdTime);
                command.Parameters.AddWithValue("updated_time", createdTime);
                connection.Open();
                command.ExecuteNonQuery();
                long userId = command.LastInsertedId;
                if (userId > 0)
                {
                    if (!string.IsNullOrEmpty(ssoUserId))
                    {
                        long identityId = CreateUserIdentity(userId, ssoTypeId, ssoUserId, createdTime);
                        if (identityId > 0)
                        {
                            return userId;
                        }
                    }
                    else
                    {
                        return userId;
                    }
                }
            }
            return 0;
        }

        public static long CreateUserIdentity(long userId, int ssoTypeId, string ssoUserId, DateTime createdTime)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        INSERT INTO user_identities 
                                        ( 
                                            user_id, 
                                            sso_user_id,
                                            sso_type_id,
                                            created_time,
                                            updated_time
                                        )
                                        VALUES 
                                        ( 
                                            ?user_id, 
                                            ?sso_user_id,
                                            ?sso_type_id,
                                            ?created_time,
                                            ?updated_time
                                        );";
                command.Connection = connection;
                command.Parameters.AddWithValue("user_id", userId);
                command.Parameters.AddWithValue("sso_user_id", ssoUserId);
                command.Parameters.AddWithValue("sso_type_id", ssoTypeId);
                command.Parameters.AddWithValue("created_time", createdTime);
                command.Parameters.AddWithValue("updated_time", createdTime);
                connection.Open();
                command.ExecuteNonQuery();
                if (command.LastInsertedId > 0)
                {
                    return command.LastInsertedId;
                }
            }
            return 0;
        }

        public static void UpdateUserProfileImg(long userId, string profileImgUrl)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                DateTime now = DateTime.UtcNow;
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        UPDATE users
                                        SET
                                            profile_img_url = ?profile_img_url
                                        WHERE 
                                            id = ?user_id
                                       ";
                command.Connection = connection;
                command.Parameters.AddWithValue("user_id", userId);
                command.Parameters.AddWithValue("profile_img_url", profileImgUrl);
                connection.Open();
                command.ExecuteNonQuery();
            }
        }
    }
}
