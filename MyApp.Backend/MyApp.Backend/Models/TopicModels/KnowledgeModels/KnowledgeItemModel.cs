namespace MyApp.Backend.Models.TopicModels.KnowledgeModels
{
    public class KnowledgeItemModel
    {
        public long Id { get; set; }
        public long TopicId { get; set; }
        public User Uploader { get; set; }
        public string? Title { get; set; }
        public string? FileUrl { get; set; }
        public string? OriginalAuthors { get; set; }
        public DateTime PublishDate { get; set; }
        public int HighlightsCount { get; set; }
        public List<long> BrainsUserIds { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
    }
}
