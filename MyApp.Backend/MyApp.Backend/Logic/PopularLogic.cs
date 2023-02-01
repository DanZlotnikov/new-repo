using MyApp.Backend.Models;
using System.Data;
using MyApp.Backend.Repositories.PostRepositories;
using MyApp.Backend.Models.PostModels;

namespace MyApp.Backend.Logic
{
    public class PopularLogic
    {
        public static List<PopularItemModel> GetPopularItems(long postId)
        {
            List<PopularItemModel> popularItems = new List<PopularItemModel>();
            DataTable table = PopularDataAccess.GetPopularItems(postId);

            if (table.Rows.Count > 0)
            {
                foreach (DataRow row in table.Rows)
                {
                    popularItems.Add(new PopularItemModel
                    {
                        Id = (long)row["id"],
                        PostId = postId,
                        IframeUrl = row["iframe_url"].ToString(),
                        Uploader = new User
                        {
                            Id = (long)row["uploader_id"],
                            firstName = row["uploader_first_name"].ToString(),
                            LastName = row["uploader_last_name"].ToString(),
                            IsVerified = (bool)row["uploader_is_verified"],
                            ProfileImgUrl = row["uploader_profile_img_url"].ToString(),
                        },
                        PlatformType = (Enums.PopularPlatformType)(int)row["platform_type_id"]
                    });
                }
            }
            return popularItems;
        }
    }
}
