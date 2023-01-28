import NewComment from './NewComment';
import ExistingComment from './ExistingComment'

function DiscussionSection({postData}) {
    var comments = postData.comments;
    return (
        <div className='discussionSectionDiv'>
            <NewComment postData={postData}/>
            <div className='existingComments-div'>
                {comments.map((comment) => (
                    <span key={comment.id}>
                        <ExistingComment commentData={comment}/>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default DiscussionSection;