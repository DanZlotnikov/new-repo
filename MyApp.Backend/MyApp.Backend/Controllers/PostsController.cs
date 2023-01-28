using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Models.PostModels;
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
        public List<Post> Get()
        {
            return PostRepository.posts;
        }

        [HttpGet("GetPost")]
        public Post GetPostById(long id)
        {
            return Get().First();
        }

        #endregion
    }
}