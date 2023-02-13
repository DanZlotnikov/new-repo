using MyApp.Backend.Logic;
using MyApp.Backend.Models.TopicModels.DiscussionModels;
using MyApp.Backend.Models.TopicModels.KnowledgeModels;
using System.Data;

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

        public void InitFromDB(DataRow row)
        {
            Id = (long)row["topic_id"];
            Author = new User
            {
                Id = (long)row["author_id"],
                firstName = row["author_first_name"].ToString(),
                LastName = row["author_last_name"].ToString(),
                IsVerified = (bool)row["author_is_verified"],
                ProfileImgUrl = row["author_profile_img_url"].ToString(),
            };
            Message = row["topic_message"].ToString();
            CreatedTime = (DateTime)row["topic_created_time"];
            UpdatedTime = (DateTime)row["topic_updated_time"];
            Comments = CommentLogic.GetComments(Id);
            KnowledgeItems = KnowledgeLogic.GetKnowledgeItems(Id);
            PopularItems = PopularLogic.GetPopularItems(Id);
        }
    }
}
