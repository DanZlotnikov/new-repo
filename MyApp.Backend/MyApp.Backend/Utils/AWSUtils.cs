using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;

namespace MyApp.Backend.Utils
{
    public class AWSUtils
    {
        private static readonly string systemTempPath = System.IO.Path.GetTempPath();
        private static readonly string s3BucketChambersName = ConfigrationHelper.AppSetting("AWS:S3:BucketChambers:BucketName");
        private static readonly string s3BucketBaseUrl = ConfigrationHelper.AppSetting("AWS:S3:BucketChambers:BaseUrl");

        public async static Task<string> UploadFileToS3(string fileName, string SubfolderPath, IFormFile formFile = null, string externalUrlFile = "")
        {
            if (formFile != null)
            {
                GeneralUtils.CreateTempFileFromFormFile(formFile);
            }
            else if (!string.IsNullOrEmpty(externalUrlFile))
            {
                await GeneralUtils.CreateTempFileFromUrl(fileName, externalUrlFile);
            }
            IAmazonS3 client = new AmazonS3Client(ConfigrationHelper.AppSetting("AWS:S3:Keys:UploadAccessKey"), ConfigrationHelper.AppSetting("AWS:S3:Keys:UploadSecretKey"), RegionEndpoint.EUCentral1);
            TransferUtility utility = new TransferUtility(client);
            TransferUtilityUploadRequest request = new TransferUtilityUploadRequest();
            if (string.IsNullOrEmpty(SubfolderPath))
            {
                request.BucketName = s3BucketChambersName; //no subdirectory just bucket name
            }
            else
            {
                request.BucketName = s3BucketChambersName + @"/" + SubfolderPath;
            }
            request.Key = fileName;
            request.FilePath = $"{systemTempPath}\\{fileName}";
            await utility.UploadAsync(request);
            return $"{s3BucketBaseUrl}/{SubfolderPath}/{fileName}";
        }

        public static string GetPresignedUrlFromS3(string s3Path)
        {
            IAmazonS3 client = new AmazonS3Client(ConfigrationHelper.AppSetting("AWS:S3:Keys:UploadAccessKey"), ConfigrationHelper.AppSetting("AWS:S3:Keys:UploadSecretKey"), RegionEndpoint.EUCentral1);
            GetPreSignedUrlRequest request = new GetPreSignedUrlRequest
            {
                BucketName = s3BucketChambersName,
                Key = s3Path,
                Expires = DateTime.Now.AddMinutes(1)
            };
            
            string presignedUrl = client.GetPreSignedURL(request);
            return presignedUrl;
        }
    }
}
