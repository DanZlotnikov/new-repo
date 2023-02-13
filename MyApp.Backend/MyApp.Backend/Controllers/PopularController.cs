using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Logic;
using MyApp.Backend.Models.TopicModels;
using MyApp.Backend.Repositories.TopicRepositories;

namespace MyApp.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PopularController : ControllerBase
    {
        private readonly ILogger<TopicsController> _logger;

        public PopularController(ILogger<TopicsController> logger)
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

        [HttpPost("AddBrainToPopularItem")]
        public bool AddBrainToPopularItem(AddBrainToPopularItemParam param)
        {
            return PopularLogic.AddBrainToPopularItem(param.itemId, param.userId);
        }

        [HttpPost("RemoveBrainFromPopularItem")]
        public bool RemoveBrainFromPopularItem(RemoveBrainFromPopularItemParam param)
        {
            return PopularLogic.RemoveBrainFromPopularItem(param.itemId, param.userId);
        }


        [HttpPost("UploadPopularItem")]
        public PopularItemModel UploadPopularItem(UploadPopularItemParam param)
        {
            return PopularLogic.UploadPopularItem(param.topicId, param.uploaderId, param.url, param.platformTypeId);
        }

        #endregion
    }
}