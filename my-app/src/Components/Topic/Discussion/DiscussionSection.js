import NewComment from './NewComment';
import ExistingComment from './ExistingComment'
import { useState } from 'react';
import texts from '../../../texts';

function DiscussionSection({topic, tutorialStage, updateDataCount}) {
    const [showAllComments, setShowAllComments] = useState(topic.comments.length < 2);
    const handleCreateComment = () => {
        setShowAllComments(true);
        updateDataCount();
    }

    return (
        <div className='discussionSectionDiv'>
            <NewComment topic={topic} tutorialStage={tutorialStage} handleCreateComment={handleCreateComment} />
            {topic.comments.length > 1 && 
            <div>
                <span className='seeDiscussions' onClick={() => setShowAllComments(!showAllComments)}>
                    {showAllComments ? texts.discussions.hideDiscussions : texts.discussions.seeAllDiscussions}
                </span>
                {!showAllComments && <span className='topComment'>
                    <ExistingComment commentData={topic.comments[0]} /> 
                </span>}
            </div>
            }
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