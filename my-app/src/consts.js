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
    { key: 0, component: <DiscussionSection />, imgPath: discussionSymbol, default: true, count: 0 },
    { key: 1, component: <KnowledgeSection />, imgPath: knowledgeSymbol, default: false, count: 0 },
    { key: 2, component: <PopularSection />, imgPath: popularSymbol, default: false, count: 0 },
]

export const PlatformType = {
    Youtube: 'Youtube',
    Spotify: 'Spotify',
    Tiktok: 'Tiktok'
}