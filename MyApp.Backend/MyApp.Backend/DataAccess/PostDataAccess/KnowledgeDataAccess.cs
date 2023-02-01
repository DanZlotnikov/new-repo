using MyApp.Backend.Logic;
using MyApp.Backend.Models.PostModels.KnowledgeModels;
using MySqlConnector;
using System.Data;

namespace MyApp.Backend.Repositories.PostRepositories
{
    public class KnowledgeDataAccess : BaseDataAccess
    {
        private readonly IConfiguration _configuration;

        public KnowledgeDataAccess(IConfiguration iconfig) : base(iconfig)
        {
            _configuration = iconfig;
        }

        public static DataTable GetKnowledgeItems(long postId)
        {
            DataTable table = new DataTable();
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText =
                    @"  
                    SELECT                                                
	                    k.id,                                
	                    k.title,
	                    k.file_url,
	                    k.item_publish_date,
	                    k.original_authors,
	                    k.brains_count,
	                    k.highlights_count,
	                    k.created_time,
	                    k.updated_time,
	                    u.id AS uploader_id,                         
	                    u.first_name AS uploader_first_name,                 
	                    u.last_name AS uploader_last_name,                   
	                    u.profile_img_url AS uploader_profile_img_url,       
	                    u.is_verified AS uploader_is_verified                
                    FROM knowledge_items k                                       
                    JOIN users u                                          
	                    ON k.uploader_id = u.id    
                    WHERE k.post_id = ?post_id
                    ";
                command.Connection = connection;
                command.Parameters.AddWithValue("post_id", postId);
                MySqlDataAdapter da = new MySqlDataAdapter(command);

                da.Fill(table);
            }
            return table;
        }

        public static bool AddBrainToKnowledgeItem(long postId, long itemId, long userId)
        {
            return true;
        }

        public static bool RemoveBrainFromKnowledgeItem(long postId, long itemId, long userId)
        {
            return true;
        }
    }
}
