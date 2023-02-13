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


        public static DataTable GetTopic(long topicId)
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
	                    t.message AS topic_message,
	                    t.created_time AS topic_created_time,
	                    t.updated_time AS topic_updated_time,
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

        public static DataTable GetTopicsForUser(long topicId)
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
	                    t.message AS topic_message,
	                    t.created_time AS topic_created_time,
	                    t.updated_time AS topic_updated_time,
	                    u.id AS author_id,
	                    u.first_name AS author_first_name,
	                    u.last_name AS author_last_name,
	                    u.profile_img_url AS author_profile_img_url,
	                    u.is_verified AS author_is_verified
                    FROM topics t
                    JOIN users u 
	                    ON t.author_id = u.id;
                    ";
                command.Connection = connection;
                command.Parameters.AddWithValue("topic_id", topicId);

                MySqlDataAdapter da = new MySqlDataAdapter(command);

                da.Fill(table);
            }
            return table;
        }

        public static long CreateNewTopic(long authorId, string message)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                DateTime now = DateTime.UtcNow;
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        INSERT INTO topics 
                                        ( 
                                            author_id,
                                            message, 
                                            created_time,
                                            updated_time
                                        ) 
                                        VALUES 
                                        ( 
                                            ?author_id,
                                            ?message, 
                                            ?created_time,
                                            ?updated_time
                                        );";
                command.Connection = connection;
                command.Parameters.AddWithValue("author_id", authorId);
                command.Parameters.AddWithValue("message", message);
                command.Parameters.AddWithValue("created_time", now);
                command.Parameters.AddWithValue("updated_time", now);
                connection.Open();
                command.ExecuteNonQuery();
                if (command.LastInsertedId > 0)
                {
                    return command.LastInsertedId;
                }
            }
            return 0;
        }
    }
}
