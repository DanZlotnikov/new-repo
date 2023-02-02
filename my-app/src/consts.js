import KnowledgeSection from './Components/Post/Knowledge/KnowledgeSection';
import DiscussionSection from './Components/Post/Discussion/DiscussionSection';
import PopularSection from './Components/Post/Popular/PopularSection.js';
import { FaBookOpen, FaFire, FaComments } from 'react-icons/fa';

export const Colors = {
    backgroundGray: '#f0f2f5',
    checkmarkBlue: '#1877f2',
    discussionBlue: '#62b1f6',
    brainPink: '#f03268',
    markerOrange: '#f28e29',
    appGreen: '#4cb45a',
}

export let PostBodySections = [
    { key: 0, component: <DiscussionSection />, icon: <FaComments />, iconColor: Colors.appGreen, dataAttributeName: 'comments' },
    { key: 1, component: <KnowledgeSection />, icon: <FaBookOpen />, iconColor: Colors.discussionBlue, dataAttributeName: 'knowledgeItems' },
    { key: 2, component: <PopularSection />, icon: <FaFire />, iconColor: Colors.brainPink, dataAttributeName: 'popularItems' },
]

export const PopularPlatformType = {
    1: 'youtube',
    2: 'spotify', 
    3: 'tiktok'
}
