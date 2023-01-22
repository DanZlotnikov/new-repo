namespace MyApp.Backend.Models
{
    public class User
    {
        public long Id { get; set; }
        public string firstName { get; set; }
        public string LastName { get; set; }
        public string? ProfilePicUrl { get; set; }
    }
}
