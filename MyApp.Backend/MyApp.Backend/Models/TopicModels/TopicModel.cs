using MyApp.Backend.Models.TopicModels.DiscussionModels;
using MyApp.Backend.Models.TopicModels.KnowledgeModels;

namespace MyApp.Backend.Models.TopicModels
{
    public class TopicModel
    {
        public long Id { get; set; }
        public User Author { get; set; }
        public string? Message { get; set; }
        public List<CommentModel> Comments { get; set; }
        public List<KnowledgeItemModel> KnowledgeItems { get; set; }
        public List<PopularItemModel> PopularItems { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
    }
}
