import BodySelectionCard from '../Common/BodySelectionCard';
import { useState, useEffect, useRef } from 'react';
import PostHeader from './PostHeader';
import { PostBodySections } from '../../consts';
import PostsApi from '../../api/PostsApi';
import DiscussionSection from './Discussion/DiscussionSection';
import KnowledgeSection from './Knowledge/KnowledgeSection';
import PopularSection from './Popular/PopularSection';

function Post() {
    const didMount = useRef(false);
    const [post, setPost] = useState(null);
    const [dataCount, setDataCount] = useState(0);
    const [selectedSection, setSelectedSection] = useState(PostBodySections.find(section => section.default === true).component);

    useEffect(() => {
        // this will only run on first render
        if (!didMount.current) {
            PostsApi.getPost(1).then((postData) => {
                setPost(postData);
                PostBodySections.filter(section => section.component.type.name === (<DiscussionSection />).type.name)[0].count = postData.discussionCount;
                PostBodySections.filter(section => section.component.type.name === (<KnowledgeSection />).type.name)[0].count = postData.knowledgeCount;
                PostBodySections.filter(section => section.component.type.name === (<PopularSection />).type.name)[0].count = postData.popularCount;
            });
            return;
        }
    }, []);

    if (!post) return null;
    return (
        <div className='post-div'>
           <PostHeader post={post}/>
            <div className='body-selection-div'>
            {PostBodySections.map((section) => (
                <span key={section.key} onClick={() => setSelectedSection(section.component)}>
                    <BodySelectionCard selected={selectedSection.type.name === section.component.type.name} imgPath={section.imgPath} dataCount={section.count} />
                </span>
            ))}
            </div>
            {selectedSection}
        </div>
    )
}

export default Post;