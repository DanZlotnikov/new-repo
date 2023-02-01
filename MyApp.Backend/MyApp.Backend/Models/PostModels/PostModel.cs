using MyApp.Backend.Models.PostModels.DiscussionModels;
using MyApp.Backend.Models.PostModels.KnowledgeModels;

namespace MyApp.Backend.Models.PostModels
{
    public class PostModel
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
