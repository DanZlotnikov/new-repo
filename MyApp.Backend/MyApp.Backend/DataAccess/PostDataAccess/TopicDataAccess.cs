using MyApp.Backend.Models;
using MySqlConnector;
using System.Data;
using System.IO;
using System.Reflection;

namespace MyApp.Backend.Repositories
{
    public class TopicDataAccess : BaseDataAccess
    {

        private readonly IConfiguration _configuration;

        public TopicDataAccess(IConfiguration iconfig) : base(iconfig)
        {
            _configuration = iconfig;
        }


        public static DataTable GetTopic(int topicId)
        {
            DataTable table = new DataTable();
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText =
                    @"  
                    SELECT
	                    t.id AS topic_id,
	                    t.message AS post_message,
	                    t.created_time AS post_created_time,
	                    t.updated_time AS post_updated_time,
	                    u.id AS author_id,
	                    u.first_name AS author_first_name,
	                    u.last_name AS author_last_name,
	                    u.profile_img_url AS author_profile_img_url,
	                    u.is_verified AS author_is_verified
                    FROM topics t
                    JOIN users u 
	                    ON t.author_id = u.id
                    WHERE t.id = ?topic_id;
                    ";
                command.Connection = connection;
                command.Parameters.AddWithValue("topic_id", topicId);

                MySqlDataAdapter da = new MySqlDataAdapter(command);

                da.Fill(table);
            }
            return table;
        }
    }
}
