namespace MyApp.Backend.Models.PostModels.KnowledgeModels
{
    public class KnowledgeModel
    {
        public long Id { get; set; }
        public long PostId { get; set; }
        public User Uploader { get; set; }
        public string Title { get; set; }
        public string FileUrl { get; set; }
        public string OriginalAuthors { get; set; }
        public DateTime PublishDate { get; set; }
        public int BrainsCount { get; set; }
        public int HighlightsCount { get; set; }
    }
}
