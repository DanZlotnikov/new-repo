import KnowledgeSection from './Components/Post/Knowledge/KnowledgeSection';
import DiscussionSection from './Components/Post/Discussion/DiscussionSection';
import PopularSection from './Components/Post/Popular/PopularSection.js';
import { FaDiscourse, FaBookOpen } from 'react-icons/fa';

export const Colors = {
    backgroundGray: '#f0f2f5',
    checkmarkBlue: '#1877f2',
    discussionBlue: '#62b1f6',
    brainPink: '#f03268',
    markerOrange: '#f28e29',
    appGreen: '#4cb45a',
}

export let PostBodySections = [
    { key: 0, component: <DiscussionSection />, icon: <FaDiscourse />, iconColor: Colors.discussionBlue },
    { key: 1, component: <KnowledgeSection />, icon: <FaBookOpen />, iconColor: Colors.appGreen },
    { key: 2, component: <PopularSection />, icon: <FaDiscourse />, iconColor: Colors.brainPink },
]

export const PopularPlatformType = {
    0: 'youtube',
    1: 'spotify', 
    2: 'tiktok'
}
