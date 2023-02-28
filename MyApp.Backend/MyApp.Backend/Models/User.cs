using MyApp.Backend.Utils;

namespace MyApp.Backend.Models
{
    public class User
    {
        public long Id { get; set; }
        public string? firstName { get; set; }
        public string? LastName { get; set; }
        public string? ProfileImgUrl { get; set; }
        public string? ProfileImgPresignedUrlS3
        {
            get
            {
                return AWSUtils.GetPresignedUrlFromS3($"{ConfigrationHelper.AppSetting("AWS:S3:BucketChambers:UserProfileImagesPath")}/{Id}_profile_img");
            }
        }
        public bool IsVerified { get; set; }
        public bool IsFirstLogin { get; set; }
    }
}
