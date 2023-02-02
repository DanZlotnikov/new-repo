using MyApp.Backend.Logic;
using MySqlConnector;
using System.Data;

namespace MyApp.Backend.Repositories.PostRepositories
{
    public class PopularDataAccess : BaseDataAccess
    {
        private readonly IConfiguration _configuration;

        public PopularDataAccess(IConfiguration iconfig) : base(iconfig)
        {
            _configuration = iconfig;
        }

        public static DataTable GetPopularItems(long postId)
        {
            DataTable table = new DataTable();
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText =
                    @"  
                    SELECT                                                
	                    p.id,                                
	                    p.platform_type_id,
	                    p.iframe_url,
	                    p.brains_count,
	                    p.created_time,
	                    p.updated_time,
	                    u.id AS uploader_id,                         
	                    u.first_name AS uploader_first_name,                 
	                    u.last_name AS uploader_last_name,                   
	                    u.profile_img_url AS uploader_profile_img_url,       
	                    u.is_verified AS uploader_is_verified                
                    FROM popular_items p                                       
                    JOIN users u                                          
	                    ON p.uploader_id = u.id    
                    WHERE p.post_id = ?post_id
                    ";
                command.Connection = connection;
                command.Parameters.AddWithValue("post_id", postId);
                MySqlDataAdapter da = new MySqlDataAdapter(command);

                da.Fill(table);
            }
            return table;
        }

        public static bool AddBrainToPopularItem(long itemId, long userId)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"UPDATE popular_items SET brains_count = (brains_count + 1) WHERE id = ?item_id";
                command.Connection = connection;
                command.Parameters.AddWithValue("item_id", itemId);
                connection.Open();
                command.ExecuteNonQuery();
            }
            return true;
        }

        public static bool RemoveBrainFromPopularItem(long itemId, long userId)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"UPDATE popular_items SET brains_count = (brains_count - 1) WHERE id = ?item_id";
                command.Connection = connection;
                command.Parameters.AddWithValue("item_id", itemId);
                connection.Open();
                command.ExecuteNonQuery();
            }
            return true;
        }
    }
}
