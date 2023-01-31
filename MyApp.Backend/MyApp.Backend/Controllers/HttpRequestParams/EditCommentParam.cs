namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class EditCommentParam
    {
        public long postId { get; set; }
        public long commentId { get; set; }
        public string message { get; set; }
    }
}
