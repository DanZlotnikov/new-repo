import TopicSectionCard from '../Common/TopicSectionCard';
import { useState } from 'react';
import TopicHeader from './TopicHeader';
import { FaBookOpen, FaFire, FaComments } from 'react-icons/fa';
import { Colors } from '../../consts';
import DiscussionSection from './Discussion/DiscussionSection';
import KnowledgeSection from './Knowledge/KnowledgeSection';
import PopularSection from './Popular/PopularSection';

function Topic({topic}) {
    const [selectedSection, setSelectedSection] = useState();

    const toggleSelectedSection = (section) => {
        switch(section.type) {
            case (DiscussionSection):
                if (selectedSection && selectedSection.type === DiscussionSection) {
                    setSelectedSection(null);
                }
                else {
                    setSelectedSection(section);
                }
                break;
            case (KnowledgeSection):
                if (selectedSection && selectedSection.type === KnowledgeSection) {
                    setSelectedSection(null);
                }
                else {
                    setSelectedSection(section);
                }
                break;
            case (PopularSection):
                if (selectedSection && selectedSection.type === PopularSection) {
                    setSelectedSection(null);
                }
                else {
                    setSelectedSection(section);
                }
                break;
            default: 
                break;
        }
    }

    return (
        <div className='topicDiv'>
        <TopicHeader topic={topic}/>
            <div className='sectionSelectionDiv'>
                <span onClick={() => toggleSelectedSection(<DiscussionSection topic={topic} />)} ><TopicSectionCard selected={selectedSection && selectedSection.type === DiscussionSection} icon={<FaComments />} iconColor={Colors.appGreen} dataCount={topic.comments.length} /></span>
                <span onClick={() => toggleSelectedSection(<KnowledgeSection topic={topic} />)} ><TopicSectionCard selected={selectedSection && selectedSection.type === KnowledgeSection} icon={<FaBookOpen />} iconColor={Colors.discussionBlue} dataCount={topic.knowledgeItems.length} /></span>
                <span onClick={() => toggleSelectedSection(<PopularSection topic={topic} />)}><TopicSectionCard selected={selectedSection && selectedSection.type === PopularSection} icon={<FaFire />} iconColor={Colors.brainPink} dataCount={topic.popularItems.length} /></span>
            </div>
             {selectedSection}
        </div>
    )
}

export default Topic;