import NewComment from './NewComment';
import ExistingComment from './ExistingComment'
import { useState } from 'react';

function DiscussionSection({postData}) {
    const [newCommentsAdded, setNewCommentsAdded] = useState(0);

    const handleCreateComment = () => {
        setNewCommentsAdded(newCommentsAdded + 1);
    }

    return (
        <div className='discussionSectionDiv'>
            <NewComment postData={postData} handleCreateComment={handleCreateComment} />
            <div className='existingCommentsDiv'>
                {postData.comments.map((comment) => (
                    <span key={comment.id}>
                        <ExistingComment commentData={comment} />
                    </span>
                ))}
            </div>
        </div>
    )
}

export default DiscussionSection;