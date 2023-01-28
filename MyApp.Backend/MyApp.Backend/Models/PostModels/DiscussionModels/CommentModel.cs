namespace MyApp.Backend.Models.PostModels.DiscussionModels
{
    public class CommentModel
    {
        public long Id { get; set; }
        public long PostId { get; set; }
        public User Author { get; set; }
        public int BrainsCount { get; set; }
        public int SubCommentsCount { get; set; }
        public string Message { get; set; }
    }
}
