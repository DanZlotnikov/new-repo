using MyApp.Backend.Models;
using System.Data;
using MyApp.Backend.Models.PostModels.KnowledgeModels;
using MyApp.Backend.Repositories.PostRepositories;

namespace MyApp.Backend.Logic
{
    public class KnowledgeLogic
    {
        public static List<KnowledgeItemModel> GetKnowledgeItems(long postId)
        {
            List<KnowledgeItemModel> knowledgeItems = new List<KnowledgeItemModel>();
            DataTable table = KnowledgeDataAccess.GetKnowledgeItems(postId);

            if (table.Rows.Count > 0)
            {
                foreach (DataRow row in table.Rows)
                {
                    knowledgeItems.Add(new KnowledgeItemModel
                    {
                        Id = (long)row["id"],
                        PostId = postId,
                        Title = row["title"].ToString(),
                        Uploader = new User
                        {
                            Id = (long)row["uploader_id"],
                            firstName = row["uploader_first_name"].ToString(),
                            LastName = row["uploader_last_name"].ToString(),
                            IsVerified = (bool)row["uploader_is_verified"],
                            ProfileImgUrl = row["uploader_profile_img_url"].ToString(),
                        },
                        FileUrl = row["file_url"].ToString(),
                        OriginalAuthors = row["original_authors"].ToString(),
                        BrainsCount = (int)row["brains_count"],
                        HighlightsCount = (int)row["highlights_count"],
                        PublishDate = (DateTime)row["item_publish_date"],
                        CreatedTime = (DateTime)row["created_time"],
                        UpdatedTime = (DateTime)row["updated_time"],
                    });
                }
            }
            return knowledgeItems;
        }

        public static bool AddBrainToKnowledgeItem(long itemId, long userId)
        {
            return KnowledgeDataAccess.AddBrainToKnowledgeItem(itemId, userId);
        }

        public static bool RemoveBrainFromKnowledgeItem(long itemId, long userId)
        {
            return KnowledgeDataAccess.RemoveBrainFromKnowledgeItem(itemId, userId);
        }
    }
}
