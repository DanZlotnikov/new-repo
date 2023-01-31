using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Models.PostModels;
using MyApp.Backend.Repositories.PostRepositories;

namespace MyApp.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PopularController : ControllerBase
    {
        private readonly ILogger<PostsController> _logger;

        public PopularController(ILogger<PostsController> logger)
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

        [HttpPost("AddBrainToPopularItem")]
        public bool AddBrainToPopularItem(AddBrainToKnowledgeItemParam param)
        {
            return PopularRepository.AddBrainToPopularItem(param.postId, param.itemId, param.userId);
        }

        [HttpPost("RemoveBrainFromPopularItem")]
        public bool RemoveBrainFromPopularItem(RemoveBrainFromKnowledgeItemParam param)
        {
            return PopularRepository.RemoveBrainFromPopularItem(param.postId, param.itemId, param.userId);
        }

        #endregion
    }
}