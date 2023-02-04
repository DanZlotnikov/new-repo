using MyApp.Backend.Logic;
using MyApp.Backend.Models.PostModels.DiscussionModels;
using MySqlConnector;
using System.Data;

namespace MyApp.Backend.Repositories.PostRepositories
{
    public class SubCommentDataAccess : BaseDataAccess
    {
        private readonly IConfiguration _configuration;

        public SubCommentDataAccess(IConfiguration iconfig) : base(iconfig) { }


        public static DataTable GetSubcomments(long commentId)
        {
            DataTable table = new DataTable();
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText =
                    @"  
                    SELECT
	                    s.id AS subcomment_id,
                        s.comment_id AS comment_id,
	                    s.message AS subcomment_message,
	                    s.created_time AS subcomment_created_time,
	                    s.updated_time AS subcomment_updated_time,
	                    u.id AS author_id,
	                    u.first_name AS author_first_name,
	                    u.last_name AS author_last_name,
	                    u.profile_img_url AS author_profile_img_url,
	                    u.is_verified AS author_is_verified
                    FROM subcomments s
                    JOIN users u 
	                    ON s.author_id = u.id	
                    WHERE s.comment_id = ?comment_id;														
                    ";
                command.Connection = connection;
                command.Parameters.AddWithValue("comment_id", commentId);
                MySqlDataAdapter da = new MySqlDataAdapter(command);

                da.Fill(table);
            }
            return table;
        }
        
        public static SubcommentModel AddSubcomment(long postId, long mainCommentId, long authorUserId, string message)
        {
            return new SubcommentModel();
        }

        public static bool DeleteSubcomment(long postId, long mainCommentId, long subcommentId, long removingUserId)
        {
            return true;
        }

        public static bool EditSubcomment(long postId, long mainCommentId, long subcommentId, string message)
        {
            return true;
        }
    }
}
