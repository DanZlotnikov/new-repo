﻿using MyApp.Backend.Logic;
using MySqlConnector;
using System.Data;

namespace MyApp.Backend.Repositories.TopicRepositories
{
    public class PopularDataAccess : BaseDataAccess
    {
        private readonly IConfiguration _configuration;

        public PopularDataAccess(IConfiguration iconfig) : base(iconfig)
        {
            _configuration = iconfig;
        }

        public static DataTable GetPopularItems(long topicId)
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
	                    p.created_time,
	                    p.updated_time,
	                    u.id AS uploader_id,                         
	                    u.first_name AS uploader_first_name,                 
	                    u.last_name AS uploader_last_name,                   
	                    u.profile_img_url AS uploader_profile_img_url,       
	                    u.is_verified AS uploader_is_verified,
                        GROUP_CONCAT(DISTINCT b.user_id) AS brains_user_ids
                    FROM popular_items p                                       
                    JOIN users u                                          
	                    ON p.uploader_id = u.id    
                     LEFT JOIN brains b
	                    ON p.id = b.object_id AND b.object_type_id = ?popular_item_object_type
                    WHERE p.topic_id = ?topic_id
                    GROUP BY p.id;
                    ";
                command.Connection = connection;
                command.Parameters.AddWithValue("topic_id", topicId); 
                command.Parameters.AddWithValue("popular_item_object_type", Enums.BrainedObjectType.PopularItem);
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
                                            ?popular_item_object_type
                                        );";
                command.Connection = connection;
                command.Parameters.AddWithValue("item_id", itemId);
                command.Parameters.AddWithValue("user_id", userId);
                command.Parameters.AddWithValue("popular_item_object_type", Enums.BrainedObjectType.PopularItem);
                connection.Open();
                command.ExecuteNonQuery();
                return command.LastInsertedId > 0;
            }
            return false;
        }

        public static bool RemoveBrainFromPopularItem(long itemId, long userId)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"DELETE FROM brains 
                                        WHERE
                                            object_id = ?item_id AND 
                                            user_id = ?user_id AND 
                                            object_type_id = ?popular_item_object_type;
                                        ";
                command.Connection = connection;
                command.Parameters.AddWithValue("item_id", itemId);
                command.Parameters.AddWithValue("user_id", userId);
                command.Parameters.AddWithValue("popular_item_object_type", Enums.BrainedObjectType.PopularItem);
                connection.Open();
                command.ExecuteNonQuery();
                return true;
            }
            return false;
        }

        public static long UploadPopularItem(long topicId, long uploaderId, string url, int platformTypeId, DateTime createdTime)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        INSERT INTO popular_items 
                                        ( 
                                            topic_id,
                                            uploader_id, 
                                            platform_type_id,
                                            iframe_url,
                                            created_time,
                                            updated_time
                                        ) 
                                        VALUES 
                                        ( 
                                            ?topic_id,
                                            ?uploader_id, 
                                            ?platform_type_id,
                                            ?iframe_url,
                                            ?created_time,
                                            ?updated_time
                                        );";
                command.Connection = connection;
                command.Parameters.AddWithValue("topic_id", topicId);
                command.Parameters.AddWithValue("uploader_id", uploaderId);
                command.Parameters.AddWithValue("platform_type_id", platformTypeId);
                command.Parameters.AddWithValue("iframe_url", url);
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
