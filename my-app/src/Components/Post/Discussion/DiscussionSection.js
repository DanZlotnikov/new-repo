import NewComment from './NewComment';
import ExistingComment from './ExistingComment'
import { useState } from 'react';

function DiscussionSection({post}) {
    const [newCommentsAdded, setNewCommentsAdded] = useState(0);

    const handleCreateComment = () => {
        setNewCommentsAdded(newCommentsAdded + 1);
    }

    return (
        <div className='discussionSectionDiv'>
            <NewComment post={post} handleCreateComment={handleCreateComment} />
            <div className='existingCommentsDiv'>
                {post.comments.map((comment) => (
                    <span key={comment.id}>
                        <ExistingComment commentData={comment} />
                    </span>
                ))}
            </div>
        </div>
    )
}

export default DiscussionSection;