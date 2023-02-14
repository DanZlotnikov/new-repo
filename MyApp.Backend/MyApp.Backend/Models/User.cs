﻿namespace MyApp.Backend.Models
{
    public class User
    {
        public long Id { get; set; }
        public string? firstName { get; set; }
        public string? LastName { get; set; }
        public string? ProfileImgUrl { get; set; }
        public bool IsVerified { get; set; }
        public bool IsFirstLogin { get; set; }
    }
}
