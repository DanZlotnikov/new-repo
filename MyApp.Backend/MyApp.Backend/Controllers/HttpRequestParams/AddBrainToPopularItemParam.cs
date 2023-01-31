using MyApp.Backend.Models;

namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class AddBrainToPopularItemParam
    {
        public long postId { get; set; }
        public long itemId { get; set; }
        public long userId { get; set; }
    }
}
