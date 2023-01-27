import KnowledgeSection from './Components/Post/Knowledge/KnowledgeSection';
import DiscussionSection from './Components/Post/Discussion/DiscussionSection';
import PopularSection from './Components/Post/Popular/PopularSection.js';
import discussionSymbol from '../src/New folder/discussion_symbol.png';
import knowledgeSymbol from '../src/New folder/knowledge_symbol.png';
import popularSymbol from '../src/New folder/popular_symbol.png';

export const Colors = {
    backgroundGray: '#f0f2f5',
    checkmarkBlue: '#1877f2',
    discussionBlue: '#62b1f6',
    brainPink: '#f03268',
    markerOrange: '#f28e29',
}

export let PostBodySections = [
    { key: 0, component: <DiscussionSection />, imgPath: discussionSymbol, count: 0, data: [] },
    { key: 1, component: <KnowledgeSection />, imgPath: knowledgeSymbol, count: 0, data: []  },
    { key: 2, component: <PopularSection />, imgPath: popularSymbol, count: 0, data: []  },
]

export const PopularPlatformType = {
    0: 'youtube',
    1: 'spotify', 
    2: 'tiktok'
}