namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class RemoveBrainFromKnowledgeItemParam
    {
        public long postId { get; set; }
        public long itemId { get; set; }
        public long userId { get; set; }
    }
}
