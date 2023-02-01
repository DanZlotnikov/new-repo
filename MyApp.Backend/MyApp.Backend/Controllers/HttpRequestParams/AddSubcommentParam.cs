using MyApp.Backend.Models;

namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class AddSubcommentParam
    {
        public long mainCommentId { get; set; }
        public string message { get; set; }
        public long authorId { get; set; }
    }
}
