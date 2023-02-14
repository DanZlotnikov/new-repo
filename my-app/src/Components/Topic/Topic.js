import TopicSectionCard from '../Common/TopicSectionCard';
import { useState } from 'react';
import TopicHeader from './TopicHeader';
import { FaBookOpen, FaFire, FaComments } from 'react-icons/fa';
import { Colors, TutorialStages } from '../../consts';
import DiscussionSection from './Discussion/DiscussionSection';
import KnowledgeSection from './Knowledge/KnowledgeSection';
import PopularSection from './Popular/PopularSection';

function Topic({topic, tutorialStage}) {
    // eslint-disable-next-line
    const [dataCountUpdates, setDataCountUpdates] = useState(0);
    const updateDataCount = () => {
        setDataCountUpdates((dataCountUpdates) => dataCountUpdates + 1);
    }
    const [selectedSection, setSelectedSection] = useState(<DiscussionSection topic={topic} tutorialStage={tutorialStage} updateDataCount={updateDataCount} />);
    return (
        <div className='topicDiv'>
        <TopicHeader topic={topic} />
            <div className='sectionSelectionDiv'>
                <span className={`${tutorialStage === TutorialStages.ExistingTopicDiscussionSection ? 'tutorial' : ''}`}  onClick={() => setSelectedSection(<DiscussionSection topic={topic} tutorialStage={tutorialStage} updateDataCount={updateDataCount} />)} ><TopicSectionCard selected={selectedSection && selectedSection.type === DiscussionSection} icon={<FaComments />} iconColor={Colors.appGreen} dataCount={topic.comments.length} /></span>
                <span className={`${tutorialStage === TutorialStages.ExistingTopicKnowledgeSection ? 'tutorial' : ''}`} onClick={() => setSelectedSection(<KnowledgeSection topic={topic} updateDataCount={updateDataCount} />)} ><TopicSectionCard selected={selectedSection && selectedSection.type === KnowledgeSection} icon={<FaBookOpen />} iconColor={Colors.discussionBlue} dataCount={topic.knowledgeItems.length} /></span>
                <span className={`${tutorialStage === TutorialStages.ExistingTopicPopularSection ? 'tutorial' : ''}`} onClick={() => setSelectedSection(<PopularSection topic={topic} updateDataCount={updateDataCount} />)}><TopicSectionCard selected={selectedSection && selectedSection.type === PopularSection} icon={<FaFire />} iconColor={Colors.brainPink} dataCount={topic.popularItems.length} /></span>
            </div>
             {selectedSection }
        </div>
    )
}

export default Topic;