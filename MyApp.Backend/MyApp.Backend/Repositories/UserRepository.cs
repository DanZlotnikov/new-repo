using MyApp.Backend.Models;

namespace MyApp.Backend.Repositories
{
    public class UserRepository
    {
        public static User margot = new User
        {
            Id = 1,
            firstName = "Margot",
            LastName = "Robbie",
            ProfileImgUrl = "http://localhost:8080/profile_pic_margot.jpg",
            Verified = true
        };

        public static User dan = new User
        {
            Id = 2,
            firstName = "Dan",
            LastName = "Zlotnikov",
            ProfileImgUrl = "http://localhost:8080/profile_pic_dan.jpg",
            Verified = true
        };

        public static User woman = new User
        {
            Id = 3,
            firstName = "Mary",
            LastName = "Lamb",
            ProfileImgUrl = "http://localhost:8080/profile_pic_woman.png",
            Verified = false
        };

        public static User man = new User
        {
            Id = 4,
            firstName = "Donald",
            LastName = "Quixote",
            ProfileImgUrl = "http://localhost:8080/profile_pic_man.jpg",
            Verified = false
        };
    }
}
