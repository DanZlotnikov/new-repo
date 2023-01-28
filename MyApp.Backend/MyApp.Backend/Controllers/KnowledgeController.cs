using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Models.PostModels;
using MyApp.Backend.Repositories.PostRepositories;

namespace MyApp.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KnowledgeController : ControllerBase
    {
        private readonly ILogger<PostsController> _logger;

        public KnowledgeController(ILogger<PostsController> logger)
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

        [HttpPost("AddBrainToKnowledgeItem")]
        public bool AddBrainToKnowledgeItem(AddBrainToKnowledgeItemParam param)
        {
            return KnowledgeRepository.AddBrainToKnowledgeItem(param.itemId, param.userId);
        }

        #endregion
    }
}