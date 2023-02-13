using MyApp.Backend.Logic;
using MyApp.Backend.Models.TopicModels.KnowledgeModels;
using MySqlConnector;
using System.ComponentModel.Design;
using System.Data;

namespace MyApp.Backend.Repositories.TopicRepositories
{
    public class KnowledgeDataAccess : BaseDataAccess
    {
        private readonly IConfiguration _configuration;

        public KnowledgeDataAccess(IConfiguration iconfig) : base(iconfig)
        {
            _configuration = iconfig;
        }

        public static DataTable GetKnowledgeItems(long topicId)
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
	                    k.highlights_count,
	                    k.created_time,
	                    k.updated_time,
	                    u.id AS uploader_id,                         
	                    u.first_name AS uploader_first_name,                 
	                    u.last_name AS uploader_last_name,                   
	                    u.profile_img_url AS uploader_profile_img_url,       
	                    u.is_verified AS uploader_is_verified,
                        GROUP_CONCAT(DISTINCT b.user_id) AS brains_user_ids
                    FROM knowledge_items k                                       
                    JOIN users u                                          
	                    ON k.uploader_id = u.id    
                    LEFT JOIN brains b
	                    ON k.id = b.object_id AND b.object_type_id = ?knowledge_item_object_type
                    WHERE k.topic_id = ?topic_id
                    GROUP BY k.id;
                    ";
                command.Connection = connection;
                command.Parameters.AddWithValue("topic_id", topicId);
                command.Parameters.AddWithValue("knowledge_item_object_type", Enums.BrainedObjectType.KnowledgeItem);
                MySqlDataAdapter da = new MySqlDataAdapter(command);

                da.Fill(table);
            }
            return table;
        }

        public static bool AddBrainToKnowledgeItem(long itemId, long userId)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        INSERT INTO brains 
                                        ( 
                                            object_id, 
                                            user_id, 
                                            object_type_id
                                        ) 
                                        VALUES 
                                        ( 
                                            ?item_id, 
                                            ?user_id, 
                                            ?knowledge_item_object_type
                                        );";
                command.Connection = connection;
                command.Parameters.AddWithValue("item_id", itemId);
                command.Parameters.AddWithValue("user_id", userId);
                command.Parameters.AddWithValue("knowledge_item_object_type", Enums.BrainedObjectType.KnowledgeItem);
                connection.Open();
                command.ExecuteNonQuery();
                return command.LastInsertedId > 0;
            }
            return false;
        }

        public static bool RemoveBrainFromKnowledgeItem(long itemId, long userId)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"DELETE FROM brains 
                                        WHERE
                                            object_id = ?item_id AND 
                                            user_id = ?user_id AND 
                                            object_type_id = ?knowledge_item_object_type;
                                        ";
                command.Connection = connection;
                command.Parameters.AddWithValue("item_id", itemId);
                command.Parameters.AddWithValue("user_id", userId);
                command.Parameters.AddWithValue("knowledge_item_object_type", Enums.BrainedObjectType.KnowledgeItem);
                connection.Open();
                command.ExecuteNonQuery();
                return true;
            }
            return false;
        }

        public static long UploadKnowledgeItem(long topicId, long uploaderId, string title, string fileUrl, string originalAuthors, DateTime publishDate, DateTime createdTime)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        INSERT INTO knowledge_items 
                                        ( 
                                            topic_id,
                                            uploader_id, 
                                            title,
                                            file_url,
                                            item_publish_date,
                                            original_authors,
                                            created_time,
                                            updated_time
                                        ) 
                                        VALUES 
                                        ( 
                                            ?topic_id,
                                            ?uploader_id, 
                                            ?title,
                                            ?file_url,
                                            ?item_publish_date,
                                            ?original_authors,
                                            ?created_time,
                                            ?updated_time
                                        );";
                command.Connection = connection;
                command.Parameters.AddWithValue("topic_id", topicId);
                command.Parameters.AddWithValue("uploader_id", uploaderId);
                command.Parameters.AddWithValue("title", title);
                command.Parameters.AddWithValue("file_url", fileUrl);
                command.Parameters.AddWithValue("item_publish_date", publishDate);
                command.Parameters.AddWithValue("original_authors", originalAuthors);
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
    }
}
