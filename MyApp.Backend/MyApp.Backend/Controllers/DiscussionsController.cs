using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Logic;
using MyApp.Backend.Models.TopicModels;
using MyApp.Backend.Models.TopicModels.DiscussionModels;

namespace MyApp.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DiscussionsController : ControllerBase
    {
        private readonly ILogger<TopicsController> _logger;

        public DiscussionsController(ILogger<TopicsController> logger)
        {
            _logger = logger;
        }

        #region GET Requests

        [HttpGet]
        public List<TopicModel> Get()
        {
            return null;
        }

        #endregion

        #region Post Requests

        [HttpPost("CreateNewComment")]
        public CommentModel CreateNewComment(CreateNewCommentParam param)
        {
            return CommentLogic.CreateNewComment(param.topicId, param.authorUserId, param.message);
        }


        [HttpPost("EditComment")]
        public bool EditComment(EditCommentParam param)
        {
            return CommentLogic.EditComment(param.commentId, param.message, param.editingUserId);
        }

        [HttpPost("AddBrainToComment")]
        public bool AddBrainToComment(AddBrainToCommentParam param)
        {
            return CommentLogic.AddBrainToComment(param.commentId, param.userId);
        }

        [HttpPost("RemoveBrainFromComment")]
        public bool RemoveBrainFromComment(RemoveBrainFromCommentParam param)
        {
            return CommentLogic.RemoveBrainFromComment(param.commentId, param.userId);
        }


        [HttpPost("AddSubcomment")]
        public SubcommentModel AddSubcomment(AddSubcommentParam param)
        {
            return CommentLogic.AddSubcomment(param.mainCommentId, param.authorId, param.message);
        }

        [HttpPost("DeleteSubcomment")]
        public bool DeleteSubcomment(DeleteSubcommentParam param)
        {
            return CommentLogic.DeleteSubcomment(param.subCommentId, param.removingUserId);
        }

        [HttpPost("EditSubcomment")]
        public bool EditSubcomment(EditSubcommentParam param)
        {
            return CommentLogic.EditSubcomment(param.subCommentId, param.message, param.editingUserId);
        }


        #endregion
    }
}