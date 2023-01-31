namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class CreateNewCommentParam
    {
        public long postId { get; set; }
        public string message { get; set; }
        public long authorUserId { get; set; }
    }
}
