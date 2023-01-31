namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class EditSubcommentParam
    {
        public long postId { get; set; }
        public long mainCommentId { get; set; }
        public long subCommentId { get; set; }
        public string message { get; set; }
    }
}
