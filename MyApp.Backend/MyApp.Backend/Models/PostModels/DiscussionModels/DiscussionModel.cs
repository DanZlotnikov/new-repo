namespace MyApp.Backend.Models.PostModels.DiscussionModels
{
    public class DiscussionModel
    {
        public long Id { get; set; }
        public User Author { get; set; }
        public int BrainsCount { get; set; }
        public int SubDiscussionsCount { get; set; }
        public string Message { get; set; }
    }
}
