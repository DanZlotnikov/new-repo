using MyApp.Backend.Models.PostModels;

namespace MyApp.Backend.Repositories.PostRepositories
{
    public class PostRepository
    {
        public static List<Post> posts = new List<Post> 
        {
            new Post
            {
                Id = 1,
                Author = UserRepository.margot,
                CreatedDate = DateTime.Now.AddDays(-100),
                Message = "How much of climate change is caused by humans?",
                Comments = DiscussionRepository.comments,
                KnowledgeItems = KnowledgeRepository.knowledgeItems,
                PopularItems = PopularRepository.popularItems
            }
        };
    }
}
