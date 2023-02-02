using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Logic;
using MyApp.Backend.Models.PostModels;
using MyApp.Backend.Repositories;
using MyApp.Backend.Repositories.PostRepositories;

namespace MyApp.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostsController : ControllerBase
    {
        private readonly ILogger<PostsController> _logger;

        public PostsController(ILogger<PostsController> logger)
        {
            _logger = logger;
        }

        #region Get Requests
        [HttpGet]
        public List<PostModel> Get()
        {
            return new List<PostModel>();
        }

        [HttpGet("GetPost")]
        public PostModel GetPostById(int id)
        {
            return PostLogic.GetPost(1);
        }

        [HttpGet("GetPostsForUser")]
        public List<PostModel> GetPostsForUser(int userId)
        {
            return new List<PostModel> {
                PostLogic.GetPost(1)
            };
        }

        #endregion
    }
}