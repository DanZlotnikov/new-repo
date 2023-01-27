using static MyApp.Backend.Enums;

namespace MyApp.Backend.Models.PostModels
{
    public class PopularModel
    {
        public long Id { get; set; }
        public User Author { get; set; }
        public PopularPlatformType PlatformType { get; set; }
        public string IframeUrl { get; set; }
        public int BrainsCount { get; set; }
        public int CommentsCount { get; set; }
        public string Message { get; set; }
    }
}
