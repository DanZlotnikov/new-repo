using MyApp.Backend.Models;
using MySqlConnector;
using System.Data;
using System.IO;
using System.Reflection;

namespace MyApp.Backend.Repositories
{
    public class PostDataAccess : BaseDataAccess
    {

        private readonly IConfiguration _configuration;

        public PostDataAccess(IConfiguration iconfig) : base(iconfig)
        {
            _configuration = iconfig;
        }


        public static DataTable GetPost(int postId)
        {
            DataTable table = new DataTable();
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText =
                    @"  
                    SELECT
	                    p.id AS post_id,
	                    p.message AS post_message,
	                    p.created_time AS post_created_time,
	                    p.updated_time AS post_updated_time,
	                    u.id AS author_id,
	                    u.first_name AS author_first_name,
	                    u.last_name AS author_last_name,
	                    u.profile_img_url AS author_profile_img_url,
	                    u.is_verified AS author_is_verified
                    FROM posts p
                    JOIN users u 
	                    ON p.author_id = u.id
                    WHERE p.id = ?post_id;
                    ";
                command.Connection = connection;
                command.Parameters.AddWithValue("post_id", postId);

                MySqlDataAdapter da = new MySqlDataAdapter(command);

                da.Fill(table);
            }
            return table;
        }
    }
}
