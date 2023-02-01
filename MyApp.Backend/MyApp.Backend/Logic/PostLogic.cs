using MyApp.Backend.Models;
using MyApp.Backend.Models.PostModels;
using MyApp.Backend.Repositories;
using System.Data;
using MyApp.Backend.Models.PostModels.KnowledgeModels;

namespace MyApp.Backend.Logic
{
    public class PostLogic
    {
        public static PostModel GetPost(int id)
        {
            PostModel post = new PostModel();
            DataTable table = PostDataAccess.GetPost(id);

            if (table.Rows.Count > 0)
            {
                DataRow row = table.Rows[0];
                post.Id = (long)row["post_id"];
                post.Author = new User 
                {
                    Id = (long)row["author_id"],
                    firstName = row["author_first_name"].ToString(),
                    LastName = row["author_last_name"].ToString(),
                    IsVerified = (bool)row["author_is_verified"],
                    ProfileImgUrl = row["author_profile_img_url"].ToString(),
                };
                post.Message = row["post_message"].ToString();
                post.CreatedTime = (DateTime)row["post_created_time"];
                post.UpdatedTime = (DateTime)row["post_updated_time"];
                post.Comments = CommentLogic.GetComments(post.Id);
                post.KnowledgeItems = KnowledgeLogic.GetKnowledgeItems(post.Id);
                post.PopularItems = PopularLogic.GetPopularItems(post.Id);
            }
            return post;
        }
    }
}
