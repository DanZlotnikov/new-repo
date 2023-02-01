namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class EditCommentParam
    {
        public long commentId { get; set; }
        public string message { get; set; }
        public long editingUserId { get; set; }
    }
}
