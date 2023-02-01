using MyApp.Backend.Models;
using MySqlConnector;

namespace MyApp.Backend.Repositories
{
    public class BaseDataAccess
    {

        private static IConfiguration _configuration;

        public BaseDataAccess(IConfiguration iconfig)
        {
            _configuration = iconfig;
        }

        public static string GetConnectionString()
        {
            return ConfigrationHelper.AppSetting("ConnectionStrings:Default");
        }
    }
}
