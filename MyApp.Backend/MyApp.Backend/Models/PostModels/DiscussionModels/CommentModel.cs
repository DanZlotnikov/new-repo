namespace MyApp.Backend.Models.PostModels.DiscussionModels
{
    public class CommentModel
    {
        public long Id { get; set; }
        public long PostId { get; set; }
        public User Author { get; set; }
        public List<SubcommentModel> Subcomments { get; set; }
        public string? Message { get; set; }
        public List<long> BrainsUserIds { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
    }
}
