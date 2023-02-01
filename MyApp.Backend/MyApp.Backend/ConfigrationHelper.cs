public class ConfigrationHelper
{
    private static ConfigrationHelper _appSettings;

    public string appSettingValue { get; set; }

    public static string AppSetting(string Key)
    {
        _appSettings = GetCurrentSettings(Key);
        return _appSettings.appSettingValue;
    }

    public ConfigrationHelper(IConfiguration config, string Key)
    {
        this.appSettingValue = config.GetValue<string>(Key);
    }

    // Get a valued stored in the appsettings.
    // Pass in a key like TestArea:TestKey to get TestValue
    public static ConfigrationHelper GetCurrentSettings(string Key)
    {
        var builder = new ConfigurationBuilder()
                        .SetBasePath(Directory.GetCurrentDirectory())
                        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                        .AddEnvironmentVariables();

        IConfigurationRoot configuration = builder.Build();

        var settings = new ConfigrationHelper(configuration.GetSection("ApplicationSettings"), Key);

        return settings;
    }
}