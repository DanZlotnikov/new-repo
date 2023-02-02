using MyApp.Backend.Models;

namespace MyApp.Backend.Controllers.HttpRequestParams
{
    public class AddBrainToKnowledgeItemParam
    {
        public long itemId { get; set; }
        public long userId { get; set; }
    }
}
