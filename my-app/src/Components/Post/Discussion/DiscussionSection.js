import NewComment from './NewComment';
import ExistingComment from './ExistingComment'

function DiscussionSection({data}) {
    var comments = data;
    return (
        <div className='discussion-section-div'>
            <NewComment />
            <div className='existing-comments-div'>
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