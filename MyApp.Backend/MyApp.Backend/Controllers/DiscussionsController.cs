using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Models.PostModels;
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

        [HttpPost("AddBrainToComment")]
        public bool AddBrainToComment(AddBrainToCommentParam param)
        {
            return DiscussionRepository.AddBrainToComment(param.postId, param.commentId, param.userId);
        }

        [HttpPost("CreateNewComment")]
        public bool CreateNewComment(CreateNewCommentParam param)
        {
            return DiscussionRepository.CreateNewComment(param.postId, param.commentText, param.authorUserId);
        }

        [HttpPost("CreateNewSubComment")]
        public bool CreateNewSubComment(CreateNewSubCommentParam param)
        {
            return DiscussionRepository.CreateNewSubComment(param.postId, param.mainCommentId, param.commentText, param.authorUserId);
        }

        #endregion
    }
}