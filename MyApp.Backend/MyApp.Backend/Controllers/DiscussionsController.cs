using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Models.PostModels;
using MyApp.Backend.Models.PostModels.DiscussionModels;
using MyApp.Backend.Repositories.PostRepositories;

namespace MyApp.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DiscussionsController : ControllerBase
    {
        private readonly ILogger<PostsController> _logger;

        public DiscussionsController(ILogger<PostsController> logger)
        {
            _logger = logger;
        }

        #region Get Requests

        [HttpGet]
        public List<Post> Get()
        {
            return null;
        }

        #endregion

        #region Post Requests

        [HttpPost("CreateNewComment")]
        public CommentModel CreateNewComment(CreateNewCommentParam param)
        {
            return DiscussionRepository.CreateNewComment(param.postId, param.authorUserId, param.message );
        }


        [HttpPost("EditComment")]
        public bool EditComment(EditCommentParam param)
        {
            return DiscussionRepository.EditComment(param.postId, param.commentId, param.message);
        }

        [HttpPost("AddBrainToComment")]
        public bool AddBrainToComment(AddBrainToCommentParam param)
        {
            return DiscussionRepository.AddBrainToComment(param.postId, param.commentId, param.userId);
        }

        [HttpPost("RemoveBrainFromComment")]
        public bool RemoveBrainFromComment(RemoveBrainFromCommentParam param)
        {
            return DiscussionRepository.RemoveBrainFromComment(param.postId, param.commentId, param.userId);
        }


        [HttpPost("AddSubcomment")]
        public SubcommentModel AddSubcomment(AddSubcommentParam param)
        {
            return DiscussionRepository.AddSubcomment(param.postId, param.mainCommentId, param.authorUserId, param.message);
        }

        [HttpPost("DeleteSubcomment")]
        public bool DeleteSubcomment(DeleteSubcommentParam param)
        {
            return DiscussionRepository.DeleteSubcomment(param.postId, param.mainCommentId, param.subCommentId, param.removingUserId);
        }

        [HttpPost("EditSubcomment")]
        public bool EditSubcomment(EditSubcommentParam param)
        {
            return DiscussionRepository.EditSubcomment(param.postId, param.mainCommentId, param.subCommentId, param.message);
        }


        #endregion
    }
}