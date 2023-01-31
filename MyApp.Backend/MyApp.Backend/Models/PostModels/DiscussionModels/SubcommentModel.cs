namespace MyApp.Backend.Models.PostModels.DiscussionModels
{
    public class SubcommentModel
    {
        public long Id { get; set; }
        public long PostId { get; set; }
        public long MainCommentId { get; set; }
        public User Author { get; set; }
        public string Message { get; set; }
    }
}
