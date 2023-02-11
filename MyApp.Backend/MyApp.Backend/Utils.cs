namespace MyApp.Backend
{
    public class Utils
    {
        public async static Task<bool> SaveImageInternally(string localPath, string imageUrl)
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    using (var response = await httpClient.GetAsync(imageUrl))
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
