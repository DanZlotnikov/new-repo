using static MyApp.Backend.Enums;

namespace MyApp.Backend.Models.PostModels
{
    public class PopularItemModel
    {
        public long Id { get; set; }
        public long PostId { get; set; }
        public User Uploader { get; set; }
        public PopularPlatformType PlatformType { get; set; }
        public string? IframeUrl { get; set; }
        public List<long> BrainsUserIds { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
    }
}
