using MyApp.Backend.Models;

namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class DeleteSubcommentParam
    {
        public long subCommentId { get; set; }
        public long removingUserId { get; set; }
    }
}
