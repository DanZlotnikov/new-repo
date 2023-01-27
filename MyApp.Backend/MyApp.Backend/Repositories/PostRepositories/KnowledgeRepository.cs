using MyApp.Backend.Models.PostModels.KnowledgeModels;

namespace MyApp.Backend.Repositories.PostRepositories
{
    public class KnowledgeRepository
    {
        public static List<KnowledgeModel> knowledgeItems = new List<KnowledgeModel>
        {
            new KnowledgeModel
            {
                Id = 1,
                Title = "Innovation and climate change: A review and introduction to the special issue",
                FileUrl = "http://localhost:8080/file1.pdf",
                Uploader = UserRepository.man,
                OriginalAuthors = "Stelvia Matos, Eric Viardot, Benjamin K. Sovacool, Frank W.Geelsg, Yu Xiong",
                PublishDate = DateTime.Parse("October, 2021"),
                BrainsCount = 513,
                HighlightsCount = 45,
            },
            new KnowledgeModel
            {
                Id = 2,
                Title = "Adapting to climate change and climate policy: progress, problems and potentials",
                Uploader = UserRepository.margot,
                FileUrl = "http://localhost:8080/file2.pdf",
                OriginalAuthors = "Daniel Scott, Susanne Becken",
                PublishDate = DateTime.Parse("April, 2009"),
                BrainsCount = 432,
                HighlightsCount = 41,
            },
            new KnowledgeModel
            {
                Id = 3,
                Title = "Climate Change Adaptation and Development: Exploring the Linkages",
                FileUrl = "http://localhost:8080/file3.pdf",
                Uploader = UserRepository.dan,
                OriginalAuthors = "E. Lisa, F. Schipper",
                PublishDate = DateTime.Parse("July, 2007"),
                BrainsCount = 251,
                HighlightsCount = 13,
            },
        };
    }
}
