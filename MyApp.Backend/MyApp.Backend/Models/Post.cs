namespace MyApp.Backend.Models
{
    public class Post
    {
        public long Id { get; set; }
        public User Author  { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Message { get; set; }
        public int DiscussionCount { get; set; }
        public int KnowledgeCount { get; set; }
        public int PopularCount { get; set; }
    }
}
