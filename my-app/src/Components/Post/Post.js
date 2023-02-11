import PostSectionCard from '../Common/PostSectionCard';
import { useState } from 'react';
import PostHeader from './PostHeader';
import { FaBookOpen, FaFire, FaComments } from 'react-icons/fa';
import { Colors } from '../../consts';
import DiscussionSection from './Discussion/DiscussionSection';
import KnowledgeSection from './Knowledge/KnowledgeSection';
import PopularSection from './Popular/PopularSection';

function Post({post}) {
    const [selectedSection, setSelectedSection] = useState(<DiscussionSection post={post} />);

    return (
        <div className='postDiv'>
        <PostHeader post={post}/>
            <div className='sectionSelectionDiv'>
                <span onClick={() => setSelectedSection(<DiscussionSection post={post} />)} ><PostSectionCard selected={selectedSection.type.name === (<DiscussionSection />).type.name} icon={<FaComments />} iconColor={Colors.appGreen} dataCount={post.comments.length} /></span>
                <span onClick={() => setSelectedSection(<KnowledgeSection post={post} />)} ><PostSectionCard selected={selectedSection.type.name === (<KnowledgeSection />).type.name} icon={<FaBookOpen />} iconColor={Colors.discussionBlue} dataCount={post.knowledgeItems.length} /></span>
                <span onClick={() => setSelectedSection(<PopularSection post={post} />)}><PostSectionCard selected={selectedSection.type.name === (<PopularSection />).type.name} icon={<FaFire />} iconColor={Colors.brainPink} dataCount={post.popularItems.length} /></span>
            </div>
             {selectedSection}
        </div>
    )
}

export default Post;