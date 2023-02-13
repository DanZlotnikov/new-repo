namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class UploadKnowledgeItemParam
    {
        public long topicId { get; set; }
        public string title { get; set; }
        public long uploaderId { get; set; }
        public string originalAuthors { get; set; }
        public string publishDate { get; set; }
    }
}
