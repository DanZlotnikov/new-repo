namespace MyApp.Backend.Models.PostModels.DiscussionModels
{
    public class SubcommentModel
    {
        public long Id { get; set; }
        public long MainCommentId { get; set; }
        public User Author { get; set; }
        public string? Message { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
    }
}
