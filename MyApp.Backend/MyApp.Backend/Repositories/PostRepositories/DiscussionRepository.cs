using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Models.PostModels.DiscussionModels;

namespace MyApp.Backend.Repositories.PostRepositories
{
    public class DiscussionRepository
    {
        public static List<CommentModel> comments = new List<CommentModel>
        {
            new CommentModel
            {
                Id = 1,
                PostId = 1,
                Author = UserRepository.margot,
                BrainsCount = 98,
                SubCommentsCount = 73,
                Message = "We gotta all unite to save the planet! Go see my highlights in #Knowledge"
            },
            new CommentModel
            {
                Id = 2,
                PostId = 1,
                Author = UserRepository.dan,
                BrainsCount = 75,
                SubCommentsCount = 66,
                Message = "This is a really complex issue. Check out some of the UN's research paper I posted in #Knowledge"
            },
            new CommentModel
            {
                Id = 3,
                PostId = 1,
                Author = UserRepository.woman,
                BrainsCount = 54,
                SubCommentsCount = 23,
                Message = "Climate change is a complete hoax!!! I JUST posted about it on #Popular"
            },

            new CommentModel
            {
                Id = 4,
                PostId = 1,
                Author = UserRepository.man,
                BrainsCount = 13,
                SubCommentsCount = 5,
                Message = "Hey @ElonMusk, would you find a solution already?"
            }
        };

        public static bool AddBrainToComment(long postId, long commentId, long userId)
        {
            return true;
        }

        public static bool CreateNewComment(long postId, string commentText, long authorUserId)
        {
            return true;
        }

        public static bool CreateNewSubComment(long postId, long mainCommentId, string commentText, long authorUserId)
        {
            return true;
        }
    }
}
