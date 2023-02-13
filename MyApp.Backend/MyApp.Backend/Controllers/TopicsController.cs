using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Logic;
using MyApp.Backend.Models.TopicModels;
using MyApp.Backend.Models.TopicModels.DiscussionModels;
using MyApp.Backend.Repositories;
using MyApp.Backend.Repositories.TopicRepositories;

namespace MyApp.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TopicsController : ControllerBase
    {
        private readonly ILogger<TopicsController> _logger;

        public TopicsController(ILogger<TopicsController> logger)
        {
            _logger = logger;
        }

        #region GET Requests
        [HttpGet]
        public List<TopicModel> Get()
        {
            return new List<TopicModel>();
        }

        [HttpGet("GetTopic")]
        public TopicModel GetTopicById(long id)
        {
            return TopicLogic.GetTopic(1);
        }

        [HttpGet("GetTopicsForUser")]
        public List<TopicModel> GetTopicsForUser(int userId)
        {
            return TopicLogic.GetTopicsForUser(userId);
        }

        #endregion

        #region POST requests

        [HttpPost("CreateNewTopic")]
        public TopicModel CreateNewTopic([FromForm] CreateNewTopicParam param)
        {
            IFormFile file = Request.Form.Files.FirstOrDefault();
            return TopicLogic.CreateNewTopic(param, file);
        }


        #endregion
    }
}