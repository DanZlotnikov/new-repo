import BodySelectionCard from '../Common/BodySelectionCard';
import { useState, cloneElement } from 'react';
import PostHeader from './PostHeader';
import { PostBodySections } from '../../consts';
import DiscussionSection from './Discussion/DiscussionSection';
import KnowledgeSection from './Knowledge/KnowledgeSection';
import PopularSection from './Popular/PopularSection';

function Post({postData}) {
    const [selectedSection, setSelectedSection] = useState(PostBodySections[0]);
    PostBodySections.filter(section => section.component.type.name === (<DiscussionSection />).type.name)[0].postData = postData;
    PostBodySections.filter(section => section.component.type.name === (<KnowledgeSection />).type.name)[0].postData = postData;
    PostBodySections.filter(section => section.component.type.name === (<PopularSection />).type.name)[0].postData = postData;

    return (
        <div className='postDiv'>
        <PostHeader post={postData}/>
            <div className='bodySelectionDiv'>
            {PostBodySections.map((section) => (
                <span key={section.key} onClick={() => setSelectedSection(section)}>
                    <BodySelectionCard selected={selectedSection.component.type.name === section.component.type.name} icon={section.icon} iconColor={section.iconColor} dataCount={section.postData[section.dataAttributeName].length} />
                </span>
            ))}
            </div>
            {cloneElement(selectedSection.component, {postData: selectedSection.postData})}
        </div>
    )
}

export default Post;