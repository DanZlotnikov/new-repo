namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class UploadPopularItemParam
    {
        public long topicId { get; set; }
        public long uploaderId { get; set; }
        public string url { get; set; }
        public int platformTypeId { get; set; }
    }
}
