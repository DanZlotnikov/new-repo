using MyApp.Backend.Models;
using MySqlConnector;
using System.ComponentModel.Design;
using System.Data;
using System.IO;
using System.Reflection;

namespace MyApp.Backend.Repositories
{
    public class UserDataAccess : BaseDataAccess
    {

        private readonly IConfiguration _configuration;

        public UserDataAccess(IConfiguration iconfig) : base(iconfig)
        {
            _configuration = iconfig;
        }

        public static DataTable GetUser(long userId)
        {
            DataTable table = new DataTable();
            using (MySqlConnection connection = new MySqlConnection(GetConnectionString()))
            {
                MySqlCommand command = new MySqlCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = @"SELECT * FROM users where id = ?user_id;";
                command.Connection = connection;
                command.Parameters.AddWithValue("user_id", userId);

                MySqlDataAdapter da = new MySqlDataAdapter(command);

                da.Fill(table);
            }
            return table;
        }
    }
}
