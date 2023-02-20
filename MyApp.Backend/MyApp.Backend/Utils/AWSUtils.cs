using Amazon;
using Amazon.S3;
using Amazon.S3.Transfer;

namespace MyApp.Backend.Utils
{
    public class AWSUtils
    {
        private static readonly string systemTempPath = System.IO.Path.GetTempPath();
        private static readonly string s3ChambersBucketName = ConfigrationHelper.AppSetting("AWS:S3:ChambersBucket:BucketName");
        private static readonly string s3BucketBaseUrl = ConfigrationHelper.AppSetting("AWS:S3:ChambersBucket:BaseUrl");

        public async static Task<string> UploadFileToS3(string localFileName, string SubfolderPath, string fileNameInS3, IFormFile formFile = null, string externalUrlFile = "")
        {
            if (formFile != null)
            {
                GeneralUtils.CreateTempFileFromFormFile(formFile);
            }
            else if (!string.IsNullOrEmpty(externalUrlFile))
            {
                await GeneralUtils.CreateTempFileFromUrl(localFileName, externalUrlFile);
            }
            IAmazonS3 client = new AmazonS3Client(ConfigrationHelper.AppSetting("AWS:S3:Keys:UploadAccessKey"), ConfigrationHelper.AppSetting("AWS:S3:Keys:UploadSecretKey"), RegionEndpoint.EUWest2);
            TransferUtility utility = new TransferUtility(client);
            TransferUtilityUploadRequest request = new TransferUtilityUploadRequest();
            if (string.IsNullOrEmpty(SubfolderPath))
            {
                request.BucketName = s3ChambersBucketName; //no subdirectory just bucket name
            }
            else
            {
                request.BucketName = s3ChambersBucketName + @"/" + SubfolderPath;
            }
            request.Key = fileNameInS3;
            request.FilePath = $"{systemTempPath}\\{localFileName}";
            await utility.UploadAsync(request);
            return $"{s3BucketBaseUrl}/{SubfolderPath}/{fileNameInS3}";
        }
    }
}
