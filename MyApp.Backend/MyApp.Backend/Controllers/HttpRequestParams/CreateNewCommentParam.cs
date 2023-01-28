using MyApp.Backend.Models;

namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class CreateNewCommentParam
    {
        public long postId { get; set; }
        public string commentText { get; set; }
        public long authorUserId { get; set; }
    }
}
