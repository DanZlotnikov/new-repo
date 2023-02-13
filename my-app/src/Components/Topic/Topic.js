import TopicSectionCard from '../Common/TopicSectionCard';
import { useState } from 'react';
import TopicHeader from './TopicHeader';
import { FaBookOpen, FaFire, FaComments } from 'react-icons/fa';
import { Colors } from '../../consts';
import DiscussionSection from './Discussion/DiscussionSection';
import KnowledgeSection from './Knowledge/KnowledgeSection';
import PopularSection from './Popular/PopularSection';

function Topic({topic}) {
    const [selectedSection, setSelectedSection] = useState(<DiscussionSection topic={topic} />);

    return (
        <div className='topicDiv'>
        <TopicHeader topic={topic}/>
            <div className='sectionSelectionDiv'>
                <span onClick={() => setSelectedSection(<DiscussionSection topic={topic} />)} ><TopicSectionCard selected={selectedSection.type.name === (<DiscussionSection />).type.name} icon={<FaComments />} iconColor={Colors.appGreen} dataCount={topic.comments.length} /></span>
                <span onClick={() => setSelectedSection(<KnowledgeSection topic={topic} />)} ><TopicSectionCard selected={selectedSection.type.name === (<KnowledgeSection />).type.name} icon={<FaBookOpen />} iconColor={Colors.discussionBlue} dataCount={topic.knowledgeItems.length} /></span>
                <span onClick={() => setSelectedSection(<PopularSection topic={topic} />)}><TopicSectionCard selected={selectedSection.type.name === (<PopularSection />).type.name} icon={<FaFire />} iconColor={Colors.brainPink} dataCount={topic.popularItems.length} /></span>
            </div>
             {selectedSection}
        </div>
    )
}

export default Topic;