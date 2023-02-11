using MyApp.Backend.Models;
using System.Data;
using MyApp.Backend.Models.PostModels.KnowledgeModels;
using MyApp.Backend.Repositories.PostRepositories;
using MyApp.Backend.Repositories;

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
                    string brainsUserIds = row["brains_user_ids"].ToString();
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
                        HighlightsCount = (int)row["highlights_count"],
                        PublishDate = (DateTime)row["item_publish_date"],
                        BrainsUserIds = string.IsNullOrEmpty(brainsUserIds) ? new List<long>() : brainsUserIds.Split(',').Select(x => long.Parse(x)).ToList(),
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

        public static KnowledgeItemModel UploadKnowledgeItem(long postId, long uploaderId, string title, string originalAuthors, DateTime publishDate, IFormFile file)
        {
            KnowledgeItemModel item = new KnowledgeItemModel();
            if (file != null)
            {
                DateTime now = DateTime.Now;
                string filePath = $"C:\\Projects\\new-repo\\my-app\\src\\New folder\\{file.FileName}";
                string fileUrl = "http://localhost:8080/" + file.FileName;
                using (FileStream fs = new FileStream(filePath, FileMode.Create, FileAccess.Write))
                {
                    file.CopyTo(fs);
                    fs.Close();
                }
                long newItemId = KnowledgeDataAccess.UploadKnowledgeItem(postId, uploaderId, title, fileUrl, originalAuthors, publishDate, now);
                if (newItemId > 0)
                {
                    item = new KnowledgeItemModel
                    {
                        Id = newItemId,
                        PostId = postId,
                        Title = title,
                        Uploader = UserLogic.GetUser(uploaderId),
                        FileUrl = fileUrl,
                        OriginalAuthors = originalAuthors,
                        PublishDate = publishDate,
                        BrainsUserIds = new List<long>(),
                        HighlightsCount = 0,
                        CreatedTime = now,
                        UpdatedTime = now
                    };
                }
            }
            return item;
        }
    }
}
