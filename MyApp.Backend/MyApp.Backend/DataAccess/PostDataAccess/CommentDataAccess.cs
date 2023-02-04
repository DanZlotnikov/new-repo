using Microsoft.Extensions.Logging;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Logic;
using MyApp.Backend.Models.PostModels.DiscussionModels;
using MySqlConnector;
using System.ComponentModel.Design;
using System.Data;
using System.IO;
using System.Reflection;

namespace MyApp.Backend.Repositories.PostRepositories
{
    public class CommentDataAccess : BaseDataAccess
    {
        private readonly IConfiguration _configuration;

        public CommentDataAccess(IConfiguration iconfig) : base(iconfig)
        {
            _configuration = iconfig;
        }

        public static DataTable GetComments(long postId)
        {
            DataTable table = new DataTable();
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText =
                    @"  
                    SELECT                                                
                      c.id AS comment_id,                                
                      c.message AS comment_message,                      
                      c.created_time AS comment_created_time,            
                      c.updated_time AS comment_updated_time,            
                      u.id AS author_id,                         
                      u.first_name AS author_first_name,                 
                      u.last_name AS author_last_name,                   
                      u.profile_img_url AS author_profile_img_url,       
                      u.is_verified AS author_is_verified,
                      GROUP_CONCAT(DISTINCT b.user_id) AS brains_user_ids
                    FROM comments c                                       
                    JOIN users u                                          
  	                    ON c.author_id = u.id   
                    LEFT JOIN brains b
	                    ON c.id = b.object_id AND b.object_type_id = ?comment_object_type
                    WHERE c.post_id = ?post_id
                    GROUP BY c.id;
                    ";
                command.Connection = connection;
                command.Parameters.AddWithValue("post_id", postId);
                command.Parameters.AddWithValue("comment_object_type", Enums.BrainedObjectType.Comment);
                MySqlDataAdapter da = new MySqlDataAdapter(command);

                da.Fill(table);
            }
            return table;
        }

        public static long CreateNewComment(long postId, long authorUserId, string message, DateTime createdTime)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        INSERT INTO comments 
                                        ( 
                                            post_id, 
                                            author_id, 
                                            message,
                                            created_time,
                                            updated_time
                                        ) 
                                        VALUES 
                                        ( 
                                            ?post_id, 
                                            ?author_id, 
                                            ?message,
                                            ?created_time,
                                            ?updated_time

                                        );";
                command.Connection = connection;
                command.Parameters.AddWithValue("post_id", postId);
                command.Parameters.AddWithValue("author_id", authorUserId);
                command.Parameters.AddWithValue("message", message);
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

        public static bool EditComment(long commentId, string message, long editingUserId)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                DateTime now = DateTime.Now;
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        UPDATE comments
                                        SET
                                            message = ?message,
                                            updated_time = ?updated_time
                                        WHERE 
                                            id = ?comment_id AND author_id=?editing_user_id;
                                       ";
                command.Connection = connection;
                command.Parameters.AddWithValue("comment_id", commentId);
                command.Parameters.AddWithValue("message", message);
                command.Parameters.AddWithValue("updated_time", DateTime.Now);
                command.Parameters.AddWithValue("editing_user_id", editingUserId);
                connection.Open();
                command.ExecuteNonQuery();
                return true;
            }
        }

        public static bool AddBrainToComment(long commentId, long userId)
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
                                            ?comment_id, 
                                            ?user_id, 
                                            ?comment_object_type
                                        );";
                command.Connection = connection;
                command.Parameters.AddWithValue("comment_id", commentId);
                command.Parameters.AddWithValue("user_id", userId);
                command.Parameters.AddWithValue("comment_object_type", Enums.BrainedObjectType.Comment);
                connection.Open();
                command.ExecuteNonQuery();
                return command.LastInsertedId > 0;
            }
            return false;
        }

        public static bool RemoveBrainFromComment(long commentId, long userId)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"DELETE FROM brains 
                                        WHERE
                                            object_id = ?comment_id AND 
                                            user_id = ?user_id AND 
                                            object_type_id = ?comment_object_type;
                                        ";
                command.Connection = connection;
                command.Parameters.AddWithValue("comment_id", commentId);
                command.Parameters.AddWithValue("user_id", userId);
                command.Parameters.AddWithValue("comment_object_type", Enums.BrainedObjectType.Comment);
                connection.Open();
                command.ExecuteNonQuery();
                return true;
            }
            return false;
        }

        public static long AddSubcomment(long mainCommentId, long authorUserId, string message, DateTime createdTime)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        INSERT INTO subcomments 
                                        ( 
                                            comment_id, 
                                            author_id, 
                                            message,
                                            created_time,
                                            updated_time
                                        ) 
                                        VALUES 
                                        ( 
                                            ?comment_id, 
                                            ?author_id, 
                                            ?message,
                                            ?created_time,
                                            ?updated_time

                                        );";
                command.Connection = connection;
                command.Parameters.AddWithValue("comment_id", mainCommentId);
                command.Parameters.AddWithValue("author_id", authorUserId);
                command.Parameters.AddWithValue("message", message);
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

        public static bool DeleteSubcomment(long subcommentId, long removingUserId)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        DELETE FROM subcomments WHERE id = ?subcomment_id AND author_id = ?removing_user_id; 
                                       ";
                command.Connection = connection;
                command.Parameters.AddWithValue("subcomment_id", subcommentId);
                command.Parameters.AddWithValue("removing_user_id", removingUserId);
                connection.Open();
                command.ExecuteNonQuery();
            }
            return true;
        }

        public static bool EditSubcomment(long subcommentId, string message, long editingUserId)
        {
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                DateTime now = DateTime.Now;
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"
                                        UPDATE subcomments
                                        SET
                                            message = ?message,
                                            updated_time = ?updated_time
                                        WHERE 
                                            id = ?subcomment_id AND author_id=?editing_user_id;
                                       ";
                command.Connection = connection;
                command.Parameters.AddWithValue("subcomment_id", subcommentId);
                command.Parameters.AddWithValue("message", message);
                command.Parameters.AddWithValue("updated_time", DateTime.Now);
                command.Parameters.AddWithValue("editing_user_id", editingUserId);
                connection.Open();
                command.ExecuteNonQuery();
                return true;
            }
        }
    }
}
