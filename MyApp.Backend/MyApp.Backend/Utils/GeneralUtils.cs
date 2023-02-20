namespace MyApp.Backend.Utils
{
    public class GeneralUtils
    {
        private static readonly string systemTempPath = System.IO.Path.GetTempPath();

        public async static Task<string> CreateTempFileFromUrl(string fileName, string fileUrl)
        {
            string tempPath = $"{systemTempPath}\\{fileName}";
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync(fileUrl))
                {
                    if (!response.IsSuccessStatusCode)
                    {
                        Console.WriteLine("Error downloading image: " + response.StatusCode);
                    }

                    using (var stream = await response.Content.ReadAsStreamAsync())
                    {
                        using (var fileStream = new FileStream(tempPath, FileMode.Create, FileAccess.Write))
                        {
                            await stream.CopyToAsync(fileStream);
                        }
                    }
                }
            }
            return tempPath;
        }

        public static string CreateTempFileFromFormFile(IFormFile file)
        {
            string tempPath = $"{systemTempPath}\\{file.FileName}";
            using (FileStream fs = new FileStream(tempPath, FileMode.Create, FileAccess.Write))
            {
                file.CopyTo(fs);
                fs.Close();
            }
            return tempPath;
        }
    }
}
