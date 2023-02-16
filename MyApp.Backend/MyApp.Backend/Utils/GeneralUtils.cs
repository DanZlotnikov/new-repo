namespace MyApp.Backend.Utils
{
    public class GeneralUtils
    {
        public async static Task<bool> SaveFileInternally(string localPath, string fileUrl)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    using (var response = await httpClient.GetAsync(fileUrl))
                    {
                        if (!response.IsSuccessStatusCode)
                        {
                            Console.WriteLine("Error downloading image: " + response.StatusCode);
                            return false;
                        }

                        using (var stream = await response.Content.ReadAsStreamAsync())
                        {
                            using (var fileStream = new FileStream(localPath, FileMode.Create, FileAccess.Write))
                            {
                                await stream.CopyToAsync(fileStream);
                            }
                        }
                    }
                }
            }
            catch
            {
                return false;
            }
            return true;
        }
    }
}
