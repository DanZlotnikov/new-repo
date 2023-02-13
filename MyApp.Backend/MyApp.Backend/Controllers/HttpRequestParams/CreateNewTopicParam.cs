namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class CreateNewTopicParam
    {
        public long authorId { get; set; }
        public string message { get; set; }
        public string? knowledgeItemTitle { get; set; }
        public string? knowledgeItemOriginalAuthors { get; set; }
        public DateTime? knowledgeItemPublishDate { get; set; }
        public string? popularItemUrl { get; set; }
        public int popularItemPlatformType { get; set; }
    }
}
