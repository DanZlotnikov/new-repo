import NewComment from '../Common/NewComment';
import ExistingComment from '../Common/ExistingComment';
import profilePicDan from '../../New folder/profile-pic-dan.jpg'
import profilePic1 from '../../New folder/profile-pic-margot.jpg'
import profilePic2 from '../../New folder/woman_profile_pic.png'
import profilePic3 from '../../New folder/profile-pic-man.jpg'

function DiscussionSection() {
    var comments = [
        {
            id: 1,
            author: {
                firstName: 'Margo',
                lastName: 'Robbie',
                profilePic: profilePic1,
                hasCheckmark: true
            },
            text: 'We gotta all unite to save the planet! Go see my highlights in #Knowledge'
        },
        {
            id: 2,
            author: {
                firstName: 'Dan',
                lastName: 'Zlotnikov',
                profilePic: profilePicDan,
                hasCheckmark: true
            },
            text: 'This is a really complex issue. Check out some of the UN\'s research paper I posted in #Knowledge '
        },
        {
            id: 3,
            author: {
                firstName: 'Mary',
                lastName: 'Lamb',
                profilePic: profilePic2,
                hasCheckmark: false
            },
            text: 'Climate change is a complete hoax!!! I JUST posted about it on #Popular'
        },
        {
            id: 4,
            author: {
                firstName: 'Donald',
                lastName: 'Quixote',
                profilePic: profilePic3,
                hasCheckmark: false
            },
            text: 'Hey @ElonMusk, would you find a solution already?'
        }
    ];
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