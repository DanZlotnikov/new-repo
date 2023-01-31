using MyApp.Backend.Models;

namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class AddSubcommentParam
    {
        public long postId { get; set; }
        public long mainCommentId { get; set; }
        public string message { get; set; }
        public long authorUserId { get; set; }
    }
}
