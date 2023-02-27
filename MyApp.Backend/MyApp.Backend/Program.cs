var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
                          policy.WithOrigins("https://localhost:3000").AllowAnyHeader().AllowAnyMethod();
                          policy.WithOrigins("https://localhost").AllowAnyHeader().AllowAnyMethod();
                          policy.WithOrigins("https://localhost:443").AllowAnyHeader().AllowAnyMethod();
                          policy.WithOrigins("https://3.73.73.110").AllowAnyHeader().AllowAnyMethod();
                          policy.WithOrigins("https://3.73.73.110:443").AllowAnyHeader().AllowAnyMethod();
                          policy.WithOrigins("https://ec2-3-73-73-110.eu-central-1.compute.amazonaws.com").AllowAnyHeader().AllowAnyMethod();
                          policy.WithOrigins("https://ec2-3-73-73-110.eu-central-1.compute.amazonaws.com:443").AllowAnyHeader().AllowAnyMethod();
                      });
});

// services.AddResponseCaching();

builder.Services.AddControllers();

var app = builder.Build();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();