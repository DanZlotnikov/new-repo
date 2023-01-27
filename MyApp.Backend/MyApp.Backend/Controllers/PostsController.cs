using Microsoft.AspNetCore.Mvc;
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

        [HttpGet]
        public List<Post> Get()
        {
            return PostRepository.posts;
        }

        [HttpGet("GetPost")]
        public Post GetPostById(int id)
        {
            return Get().First();
        }
    }
}