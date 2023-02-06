using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Logic;
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
        public List<PostModel> Get()
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
            return PopularLogic.UploadPopularItem(param.postId, param.uploaderId, param.url, param.platformTypeId);
        }

        #endregion
    }
}