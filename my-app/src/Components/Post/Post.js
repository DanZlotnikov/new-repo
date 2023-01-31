import BodySelectionCard from '../Common/BodySelectionCard';
import { useState, useEffect, useRef, cloneElement } from 'react';
import PostHeader from './PostHeader';
import { PostBodySections } from '../../consts';
import PostsApi from '../../api/PostsApi';
import DiscussionSection from './Discussion/DiscussionSection';
import KnowledgeSection from './Knowledge/KnowledgeSection';
import PopularSection from './Popular/PopularSection';

function Post() {
    const didMount = useRef(false);
    const [post, setPost] = useState(null);
    const [selectedSection, setSelectedSection] = useState(PostBodySections[0]);

    const initBodySectionData = (postData) => {
        setPost(postData);
        PostBodySections.filter(section => section.component.type.name === (<DiscussionSection />).type.name)[0].data = postData.comments;
        PostBodySections.filter(section => section.component.type.name === (<KnowledgeSection />).type.name)[0].data = postData.knowledgeItems;
        PostBodySections.filter(section => section.component.type.name === (<PopularSection />).type.name)[0].data = postData.popularItems;
    }

    useEffect(() => {
        if (!didMount.current) { // this will only run on first render
            PostsApi.getPost(1).then((postData) => {
               initBodySectionData(postData);
            });
            return;
        }
    }, []);

    if (!post) return null;
    
    return (
        <div className='postDiv'>
           <PostHeader post={post}/>
            <div className='bodySelectionDiv'>
            {PostBodySections.map((section) => (
                <span key={section.key} onClick={() => setSelectedSection(section)}>
                    <BodySelectionCard selected={selectedSection.component.type.name === section.component.type.name} icon={section.icon} iconColor={section.iconColor} dataCount={section.count} />
                </span>
            ))}
            </div>
            {cloneElement(selectedSection.component, {postData: selectedSection.data})}
        </div>
    )
}

export default Post;