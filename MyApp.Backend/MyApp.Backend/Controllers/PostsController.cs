using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Models;

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
        public IEnumerable<Post> Get()
        {
            return Enumerable.Range(1, 2).Select(index => new Post
            {
                Id = index,
                Author = new User
                {
                    Id = 1,
                    firstName = "Margot",
                    LastName = "Robbie"
                },
                CreatedDate = DateTime.Now.AddDays(-100),
                Message = "How much of climate change is caused by humans?",
                DiscussionCount = 123,
                KnowledgeCount = 3,
                PopularCount = 3
            }).ToArray();
        }

        [HttpGet("GetPost")]
        public Post GetPostById(int id)
        {
            return new Post
            {
                Id = id,
                Author = new User
                {
                    Id = 1,
                    firstName = "Margot",
                    LastName = "Robbie"
                },
                CreatedDate = DateTime.Now.AddDays(-100),
                Message = "How much of climate change is caused by humans?",
                DiscussionCount = 123,
                KnowledgeCount = 3,
                PopularCount = 3
            };
        }
    }
}