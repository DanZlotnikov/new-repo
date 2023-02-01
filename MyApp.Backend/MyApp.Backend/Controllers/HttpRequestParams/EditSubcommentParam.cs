namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class EditSubcommentParam
    {
        public long subCommentId { get; set; }
        public string message { get; set; }
        public long editingUserId { get; set; }
    }
}
