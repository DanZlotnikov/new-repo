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
        public int BrainsCount { get; set; }
    }
}
