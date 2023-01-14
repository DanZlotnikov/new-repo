import BodySelectionCard from './Common/BodySelectionCard';
import { useState } from 'react';
import PostHeader from './PostComponents/PostHeader';
import { postBodySections } from '../consts';

function Post() {
    var headerData = {
        author: {
            firstName: 'Margot',
            lastName: 'Robbie'
        },
        date: 'March 29, 2018',
        message: 'How much of climate change is caused by humans?'
    }
    
    const [selectedSection, setSelectedSection] = useState(postBodySections.find(section => section.default == true).component);
    return (
        <div className='post-div'>
           <PostHeader headerData={headerData}/>
            <div className='body-selection-div'>
            {postBodySections.map((section) => (
                <span key={section.key} onClick={() => setSelectedSection(section.component)}>
                    <BodySelectionCard selected={selectedSection.type.name == section.component.type.name} imgPath={section.imgPath} dataCount={'10K'}/>
                </span>
            ))}
            </div>
            {selectedSection}
        </div>
    )
}

export default Post;