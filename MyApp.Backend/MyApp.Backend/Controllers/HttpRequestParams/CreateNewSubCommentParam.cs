using MyApp.Backend.Models;

namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class CreateNewSubCommentParam
    {
        public long postId { get; set; }
        public long mainCommentId { get; set; }
        public string commentText { get; set; }
        public long authorUserId { get; set; }
    }
}
