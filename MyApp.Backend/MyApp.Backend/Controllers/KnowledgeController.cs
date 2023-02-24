using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Logic;
using MyApp.Backend.Models.TopicModels;
using MyApp.Backend.Models.TopicModels.KnowledgeModels;

namespace MyApp.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class KnowledgeController : ControllerBase
    {
        private readonly ILogger<TopicsController> _logger;

        public KnowledgeController(ILogger<TopicsController> logger)
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

        [HttpPost("AddBrainToKnowledgeItem")]
        public bool AddBrainToKnowledgeItem(AddBrainToKnowledgeItemParam param)
        {
            return KnowledgeLogic.AddBrainToKnowledgeItem(param.itemId, param.userId);
        }

        [HttpPost("RemoveBrainFromKnowledgeItem")]
        public bool RemoveBrainFromKnowledgeItem(RemoveBrainFromKnowledgeItemParam param)
        {
            return KnowledgeLogic.RemoveBrainFromKnowledgeItem(param.itemId, param.userId);
        }

        [HttpPost("UploadKnowledgeItem")]
        public async Task<KnowledgeItemModel> UploadKnowledgeItem([FromForm] UploadKnowledgeItemParam param)
        {
            IFormFile file = Request.Form.Files.FirstOrDefault();
            return await KnowledgeLogic.UploadKnowledgeItem(param.topicId, param.uploaderId, param.title, param.originalAuthors, DateTime.Parse(param.publishDate), file);
        }   

        #endregion
    }
}