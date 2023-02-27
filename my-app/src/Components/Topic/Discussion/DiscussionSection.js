import NewComment from './NewComment';
import ExistingComment from './ExistingComment'
import { useState } from 'react';
import texts from '../../../texts';

function DiscussionSection({topic, tutorialStage, updateDataCount}) {
    const [showAllComments, setShowAllComments] = useState(false);
    const handleCreateComment = () => {
        setShowAllComments(true);
        updateDataCount();
    }

    return (
        <div className='discussionSectionDiv'>
            <NewComment topic={topic} tutorialStage={tutorialStage} handleCreateComment={handleCreateComment} />
            <div>
            {topic.comments.length > 0 &&
                <span className='seeDiscussions' onClick={() => setShowAllComments(!showAllComments)}>
                    {showAllComments ? texts().discussions.hideDiscussions : texts().discussions.seeAllDiscussions}
                </span>
            }
            </div>
            {showAllComments && <div className='existingCommentsDiv'>
                {topic.comments.map((comment) => (
                    <span key={comment.id}>
                        <ExistingComment commentData={comment} />
                    </span>
                ))}
            </div>}
        </div>
    )
}

export default DiscussionSection;