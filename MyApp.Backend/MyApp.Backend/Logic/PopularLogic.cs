using MyApp.Backend.Models;
using System.Data;
using MyApp.Backend.Repositories.TopicRepositories;
using MyApp.Backend.Models.TopicModels;

namespace MyApp.Backend.Logic
{
    public class PopularLogic
    {
        public static List<PopularItemModel> GetPopularItems(long topicId)
        {
            List<PopularItemModel> popularItems = new List<PopularItemModel>();
            DataTable table = PopularDataAccess.GetPopularItems(topicId);

            if (table.Rows.Count > 0)
            {
                foreach (DataRow row in table.Rows)
                {
                    string brainsUserIds = row["brains_user_ids"].ToString();
                    popularItems.Add(new PopularItemModel
                    {
                        Id = (long)row["id"],
                        TopicId = topicId,
                        IframeUrl = row["iframe_url"].ToString(),
                        Uploader = new User
                        {
                            Id = (long)row["uploader_id"],
                            firstName = row["uploader_first_name"].ToString(),
                            LastName = row["uploader_last_name"].ToString(),
                            IsVerified = (bool)row["uploader_is_verified"],
                            ProfileImgUrl = row["uploader_profile_img_url"].ToString(),
                        },
                        PlatformType = (Enums.PopularPlatformType)(int)row["platform_type_id"],
                        BrainsUserIds = string.IsNullOrEmpty(brainsUserIds) ? new List<long>() : brainsUserIds.Split(',').Select(x => long.Parse(x)).ToList(),
                        CreatedTime = (DateTime)row["created_time"],
                        UpdatedTime = (DateTime)row["updated_time"],
                    });
                }
            }
            return popularItems;
        }

        public static bool AddBrainToPopularItem(long itemId, long userId)
        {
            return PopularDataAccess.AddBrainToPopularItem(itemId, userId);
        }

        public static bool RemoveBrainFromPopularItem(long itemId, long userId)
        {
            return PopularDataAccess.RemoveBrainFromPopularItem(itemId, userId);
        } 
        
        public static PopularItemModel UploadPopularItem(long topicId, long uploaderId, string url, int platformTypeId)
        {
            PopularItemModel item = new PopularItemModel();
            DateTime now = DateTime.UtcNow;
            long newItemId = PopularDataAccess.UploadPopularItem(topicId, uploaderId, url, platformTypeId, now);
            if (newItemId > 0)
            {
                item = new PopularItemModel
                {
                    Id = newItemId,
                    TopicId = topicId,
                    Uploader = UserLogic.GetUser(uploaderId),
                    BrainsUserIds = new List<long>(),
                    IframeUrl = url,
                    PlatformType = (Enums.PopularPlatformType)platformTypeId,
                    CreatedTime = now,
                    UpdatedTime = now
                };
            }
            return item;
        }
    }
}
