import KnowledgeSection from './Components/PostComponents/KnowledgeSection';
import DiscussionSection from './Components/PostComponents/DiscussionSection';
import PopularSection from './Components/PostComponents/PopularSection.js';
import discussionSymbol from '../src/New folder/discussion_symbol.png';
import knowledgeSymbol from '../src/New folder/knowledge_symbol.png';
import popularSymbol from '../src/New folder/popular_symbol.png';

export const colors = {
    backgroundGray: '#f0f2f5',
    checkmarkBlue: '#1877f2'
}

export const postBodySections = [
    { key: 0, component: <DiscussionSection />, imgPath: discussionSymbol, default: true },
    { key: 1, component: <KnowledgeSection />, imgPath: knowledgeSymbol, default: false },
    { key: 2, component: <PopularSection />, imgPath: popularSymbol, default: false },
]