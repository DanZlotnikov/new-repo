import Comment from '../Common/Comment';
import profilePicDan from '../../New folder/profile-pic-dan.jpg'
function DiscussionSection() {
    var comments = [
        {
            id: 1,
            author: {
                firstName: 'Dan',
                lastName: 'Zlotnikov',
                profilePic: profilePicDan
            }
        }
    ];
    return (
        <div className='discussion-section-div'>
            {comments.map((comment) => (
                <span key={comment}>
                    <Comment commentData={comment}/>
                </span>
            ))}
        </div>
    )
}

export default DiscussionSection;