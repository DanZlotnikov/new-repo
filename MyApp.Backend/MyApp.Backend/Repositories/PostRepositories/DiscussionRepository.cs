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
                Subcomments = new List<SubcommentModel>
                {
                    new SubcommentModel
                    {
                        Id = 1,
                        PostId = 1,
                        MainCommentId = 1,
                        Author = UserRepository.man,
                        Message = "YEAH MARGOT LETS GOO"
                    },
                    new SubcommentModel
                    {
                        Id = 2,
                        PostId = 1,
                        MainCommentId = 1,
                        Author = UserRepository.dan,
                        Message = "Read the docs brooo"
                    },
                },
                Message = "We gotta all unite to save the planet! Go see my highlights in #Knowledge"
            },
            new CommentModel
            {
                Id = 2,
                PostId = 1,
                Author = UserRepository.dan,
                BrainsCount = 75,
                Subcomments = new List<SubcommentModel>
                {
                    new SubcommentModel
                    {
                        Id = 3,
                        PostId = 1,
                        MainCommentId = 1,
                        Author = UserRepository.woman,
                        Message = "I read them all and you're still wrong"
                    },
                    new SubcommentModel
                    {
                        Id = 4,
                        PostId = 1,
                        MainCommentId = 1,
                        Author = UserRepository.man,
                        Message = "I don't need to read it"
                    },
                },
                Message = "This is a really complex issue. Check out some of the UN's research paper I posted in #Knowledge"
            },
            new CommentModel
            {
                Id = 3,
                PostId = 1,
                Author = UserRepository.woman,
                BrainsCount = 54,
                Subcomments = new List<SubcommentModel>
                {
                    new SubcommentModel
                    {
                        Id = 1,
                        PostId = 1,
                        MainCommentId = 1,
                        Author = UserRepository.margot,
                        Message = "If you don't have anything smart to say, say nothing"
                    },
                },
                Message = "Climate change is a complete hoax!!! I JUST posted about it on #Popular"
            },

            new CommentModel
            {
                Id = 4,
                PostId = 1,
                Author = UserRepository.man,
                BrainsCount = 13,
                Subcomments = new List<SubcommentModel> { },
                Message = "Hey @ElonMusk, would you find a solution already?"
            }
        };

        public static bool EditComment(long postId, long commentId, string message)
        {
            return true;
        }

        public static CommentModel CreateNewComment(long postId, long authorUserId, string message)
        {
            return new CommentModel
            {
                Id = 100,
                PostId = postId,
                Author = UserRepository.dan,
                Message = message,
                Subcomments = new List<SubcommentModel>(),
                BrainsCount = 0
            };
        }

        public static bool AddBrainToComment(long postId, long commentId, long userId)
        {
            return true;
        }

        public static bool RemoveBrainFromComment(long postId, long commentId, long userId)
        {
            return true;
        }


        public static SubcommentModel AddSubcomment(long postId, long mainCommentId, long authorUserId, string message)
        {
            return new SubcommentModel
            {
                Id = 100,
                PostId = postId,
                MainCommentId = mainCommentId,
                Author = UserRepository.dan,
                Message = message
            };
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
