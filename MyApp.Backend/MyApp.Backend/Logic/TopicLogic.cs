using MyApp.Backend.Models;
using MyApp.Backend.Models.TopicModels;
using MyApp.Backend.Repositories;
using System.Data;
using MyApp.Backend.Models.TopicModels.KnowledgeModels;
using MyApp.Backend.Controllers.HttpRequestParams;

namespace MyApp.Backend.Logic
{
    public class TopicLogic
    {
        public static TopicModel GetTopic(long id)
        {
            TopicModel topic = new TopicModel();
            DataTable table = TopicDataAccess.GetTopic(id);
            if (table.Rows.Count > 0)
            {
                topic.InitFromDB(table.Rows[0]);
            }
            return topic;
        }

        public static List<TopicModel> GetTopicsForUser(long userId)
        {
            List<TopicModel> topicModels = new List<TopicModel>();
            DataTable table = TopicDataAccess.GetTopicsForUser(userId);
            if (table.Rows.Count > 0)
            {
                foreach (DataRow row in table.Rows)
                {
                    TopicModel topic = new TopicModel();
                    topic.InitFromDB(row);
                    topicModels.Add(topic);
                }
            }
            return topicModels;
        }
        public static TopicModel CreateNewTopic(CreateNewTopicParam param, IFormFile file)
        {
            TopicModel topicModel = new TopicModel();
            long newTopicId = TopicDataAccess.CreateNewTopic(param.authorId, param.message);
            if (newTopicId > 0)
            {
                if (!string.IsNullOrEmpty(param.knowledgeItemTitle))
                {
                    KnowledgeLogic.UploadKnowledgeItem(newTopicId, param.authorId, param.knowledgeItemTitle, param.knowledgeItemOriginalAuthors, (DateTime)param.knowledgeItemPublishDate, file);
                }
                if (!string.IsNullOrEmpty(param.popularItemUrl))
                {
                    PopularLogic.UploadPopularItem(newTopicId, param.authorId, param.popularItemUrl, param.popularItemPlatformType);
                }
            }
            return topicModel;
        }
    }
}
