using Microsoft.AspNetCore.Mvc;
using MyApp.Backend.Controllers.HttpRequestParams;
using MyApp.Backend.Logic;
using MyApp.Backend.Models;

namespace MyApp.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ILogger<AuthController> _logger;

        public AuthController(ILogger<AuthController> logger)
        {
            _logger = logger;
        }

        #region Post Requests

        [HttpPost("Login")]
        public async Task<User> Login(LoginParam param)
        {
            return await AuthLogic.SsoLogin((Enums.SsoType)param.ssoTypeId, param.userSsoId, param.ssoAccessToken, param.firstName, param.lastName);
        }

        #endregion
    }
}