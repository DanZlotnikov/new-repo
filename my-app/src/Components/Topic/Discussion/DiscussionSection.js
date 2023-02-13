import NewComment from './NewComment';
import ExistingComment from './ExistingComment'
import { useState } from 'react';

function DiscussionSection({topic}) {
    const [newCommentsAdded, setNewCommentsAdded] = useState(0);

    const handleCreateComment = () => {
        setNewCommentsAdded(newCommentsAdded + 1);
    }

    return (
        <div className='discussionSectionDiv'>
            <NewComment topic={topic} handleCreateComment={handleCreateComment} />
            <div className='existingCommentsDiv'>
                {topic.comments.map((comment) => (
                    <span key={comment.id}>
                        <ExistingComment commentData={comment} />
                    </span>
                ))}
            </div>
        </div>
    )
}

export default DiscussionSection;