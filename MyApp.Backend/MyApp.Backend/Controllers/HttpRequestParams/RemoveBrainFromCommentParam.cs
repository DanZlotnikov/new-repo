using MyApp.Backend.Models;

namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class RemoveBrainFromCommentParam
    {
        public long postId { get; set; }
        public long commentId { get; set; }
        public long userId { get; set; }
    }
}
