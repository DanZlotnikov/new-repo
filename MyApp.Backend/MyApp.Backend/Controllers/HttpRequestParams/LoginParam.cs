namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class LoginParam
    {
        public string? userSsoId { get; set; }
        public int ssoTypeId { get; set; }
        public string ssoAccessToken { get; set; }
        public string? firstName { get; set; }
        public string? lastName{ get; set; }
    }
}
