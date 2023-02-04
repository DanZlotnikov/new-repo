using MyApp.Backend.Models;
using System.Data;
using MyApp.Backend.Models.PostModels.DiscussionModels;
using MyApp.Backend.Repositories.PostRepositories;

namespace MyApp.Backend.Logic
{
    public class CommentLogic
    {
        public static List<CommentModel> GetComments(long postId)
        {
            List<CommentModel> comments = new List<CommentModel>();
            DataTable table = CommentDataAccess.GetComments(postId);

            if (table.Rows.Count > 0)
            {
                foreach (DataRow row in table.Rows)
                {
                    string brainsUserIds = row["brains_user_ids"].ToString();
                    comments.Add(new CommentModel
                    {
                        Id = (long)row["comment_id"],
                        PostId = postId,
                        Author = new User
                        {
                            Id = (long)row["author_id"],
                            firstName = row["author_first_name"].ToString(),
                            LastName = row["author_last_name"].ToString(),
                            IsVerified = (bool)row["author_is_verified"],
                            ProfileImgUrl = row["author_profile_img_url"].ToString(),
                        },
                        Message = row["comment_message"].ToString(),
                        Subcomments = SubcommentLogic.GetSubcomments((long)row["comment_id"]),
                        BrainsUserIds = string.IsNullOrEmpty(brainsUserIds) ? new List<long>() : brainsUserIds.Split(',').Select(x => long.Parse(x)).ToList(),
                        CreatedTime = (DateTime)row["comment_created_time"],
                        UpdatedTime = (DateTime)row["comment_updated_time"],
                    });
                }
            }
            return comments;
        }

        public static bool EditComment(long commentId, string message, long editingUserId)
        {
            return CommentDataAccess.EditComment(commentId, message, editingUserId);
        }

        public static CommentModel CreateNewComment(long postId, long authorUserId, string message)
        {
            DateTime createdTime = DateTime.Now;
            long createdId = CommentDataAccess.CreateNewComment(postId, authorUserId, message, createdTime);
            if (createdId > 0)
            {
                return new CommentModel
                {
                    Id = createdId,
                    PostId = postId,
                    Author = UserLogic.GetUser(authorUserId),
                    Message = message,
                    BrainsUserIds = new List<long>(),
                    CreatedTime = createdTime,
                    UpdatedTime = createdTime,
                    Subcomments = new List<SubcommentModel>()
                };
            }
            else
            {
                return new CommentModel();
            }

        }

        public static bool AddBrainToComment(long commentId, long userId)
        {
            return CommentDataAccess.AddBrainToComment(commentId, userId);
        }

        public static bool RemoveBrainFromComment(long commentId, long userId)
        {
            return CommentDataAccess.RemoveBrainFromComment(commentId, userId);
        }

        public static SubcommentModel AddSubcomment(long mainCommentId, long authorUserId, string message)
        {
            DateTime createdTime = DateTime.Now;
            long createdId = CommentDataAccess.AddSubcomment(mainCommentId, authorUserId, message, createdTime);
            if (createdId > 0)
            {
                return new SubcommentModel
                {
                    Id = createdId,
                    MainCommentId = mainCommentId,
                    Author = UserLogic.GetUser(authorUserId),
                    Message = message,
                    CreatedTime = createdTime,
                    UpdatedTime = createdTime
                };
            }
            else
            {
                return new SubcommentModel();
            }
        }

        public static bool DeleteSubcomment(long subcommentId, long removingUserId)
        {
            return CommentDataAccess.DeleteSubcomment(subcommentId, removingUserId);
        }

        public static bool EditSubcomment(long subcommentId, string message, long editingUserId)
        {
            return CommentDataAccess.EditSubcomment(subcommentId, message, editingUserId);
        }
    }
}
