using MyApp.Backend.Models;
using MyApp.Backend.Models.PostModels;
using System.Data;
using MyApp.Backend.Models.PostModels.DiscussionModels;
using MyApp.Backend.Models.PostModels.KnowledgeModels;
using MyApp.Backend.Repositories.PostRepositories;

namespace MyApp.Backend.Logic
{
    public class SubcommentLogic
    {
        public static List<SubcommentModel> GetSubcomments(long commentId)
        {
            List<SubcommentModel> subcomments = new List<SubcommentModel>();
            DataTable table = SubCommentDataAccess.GetSubcomments(commentId);

            if (table.Rows.Count > 0)
            {
                foreach (DataRow row in table.Rows)
                {
                    subcomments.Add(new SubcommentModel
                    {
                        Id = (long)row["subcomment_id"],
                        Author = new User
                        {
                            Id = (long)row["author_id"],
                            firstName = row["author_first_name"].ToString(),
                            LastName = row["author_last_name"].ToString(),
                            IsVerified = (bool)row["author_is_verified"],
                            ProfileImgUrl = row["author_profile_img_url"].ToString(),
                        },
                        Message = row["subcomment_message"].ToString(),
                        CreatedTime = (DateTime)row["subcomment_created_time"],
                        UpdatedTime = (DateTime)row["subcomment_updated_time"],
                    });
                }
            }
            return subcomments;
        }
    }
}
