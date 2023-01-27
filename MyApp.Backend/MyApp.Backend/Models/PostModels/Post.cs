using MyApp.Backend.Models.PostModels.DiscussionModels;
using MyApp.Backend.Models.PostModels.KnowledgeModels;

namespace MyApp.Backend.Models.PostModels
{
    public class Post
    {
        public long Id { get; set; }
        public User Author { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Message { get; set; }
        public List<DiscussionModel> Discussions { get; set; }
        public List<KnowledgeModel> KnowledgeItems { get; set; }
        public List<PopularModel> PopularItems { get; set; }
    }
}
