using MyApp.Backend.Models.PostModels.DiscussionModels;

namespace MyApp.Backend.Repositories.PostRepositories
{
    public class DiscussionRepository
    {
        public static List<DiscussionModel> discussions = new List<DiscussionModel>
        {
            new DiscussionModel
            {
                Id = 1,
                Author = UserRepository.margot,
                BrainsCount = 98,
                SubDiscussionsCount = 73,
                Message = "We gotta all unite to save the planet! Go see my highlights in #Knowledge"
            },
            new DiscussionModel
            {
                Id = 2,
                Author = UserRepository.dan,
                BrainsCount = 75,
                SubDiscussionsCount = 66,
                Message = "This is a really complex issue. Check out some of the UN's research paper I posted in #Knowledge"
            },
            new DiscussionModel
            {
                Id = 3,
                Author = UserRepository.woman,
                BrainsCount = 54,
                SubDiscussionsCount = 23,
                Message = "Climate change is a complete hoax!!! I JUST posted about it on #Popular"
            },

            new DiscussionModel
            {
                Id = 4,
                Author = UserRepository.man,
                BrainsCount = 13,
                SubDiscussionsCount = 5,
                Message = "Hey @ElonMusk, would you find a solution already?"
            }
        };
    }
}
