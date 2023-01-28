using MyApp.Backend.Models.PostModels;
using MyApp.Backend.Models.PostModels.KnowledgeModels;

namespace MyApp.Backend.Repositories.PostRepositories
{
    public class PopularRepository
    {
        public static List<PopularModel> popularItems = new List<PopularModel>
        {
            new PopularModel
            {
                Id = 1,
                Uploader = UserRepository.woman,
                PlatformType = Enums.PopularPlatformType.Youtube,
                IframeUrl = "https://www.youtube.com/embed/xpyrefzvTpI",
                BrainsCount = 30597,
                CommentsCount = 2894
            },
            new PopularModel
            {
                Id = 2,
                Uploader = UserRepository.dan,
                PlatformType = Enums.PopularPlatformType.Spotify,
                IframeUrl = "https://open.spotify.com/embed/episode/76RdMG5Tne7H9jaP7mhkdk/video?utm_source=generator&theme=0",
                BrainsCount = 17687,
                CommentsCount = 5433
            },
            new PopularModel
            {
                Id = 3,
                Uploader = UserRepository.man,
                PlatformType = Enums.PopularPlatformType.Tiktok,
                IframeUrl = "https://www.tiktok.com/@scout2015/video/7025299649821003013",
                BrainsCount = 6489,
                CommentsCount = 447
            }
        };
    }
}
