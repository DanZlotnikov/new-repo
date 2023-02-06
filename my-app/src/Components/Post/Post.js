import BodySelectionCard from '../Common/BodySelectionCard';
import { useState, cloneElement } from 'react';
import PostHeader from './PostHeader';
import { PostBodySections } from '../../consts';
import DiscussionSection from './Discussion/DiscussionSection';
import KnowledgeSection from './Knowledge/KnowledgeSection';
import PopularSection from './Popular/PopularSection';

function Post({post}) {
    const [selectedSection, setSelectedSection] = useState(PostBodySections[0]);
    PostBodySections.filter(section => section.component.type.name === (<DiscussionSection />).type.name)[0].post = post;
    PostBodySections.filter(section => section.component.type.name === (<KnowledgeSection />).type.name)[0].post = post;
    PostBodySections.filter(section => section.component.type.name === (<PopularSection />).type.name)[0].post = post;

    return (
        <div className='postDiv'>
        <PostHeader post={post}/>
            <div className='bodySelectionDiv'>
            {PostBodySections.map((section) => (
                <span key={section.key} onClick={() => setSelectedSection(section)}>
                    <BodySelectionCard selected={selectedSection.component.type.name === section.component.type.name} icon={section.icon} iconColor={section.iconColor} dataCount={section.post[section.dataAttributeName].length} />
                </span>
            ))}
            </div>
            {cloneElement(selectedSection.component, {post: selectedSection.post})}
        </div>
    )
}

export default Post;