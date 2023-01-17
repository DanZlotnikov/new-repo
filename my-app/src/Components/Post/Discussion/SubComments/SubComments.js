import defaultProfilePic from '../../../../New folder/default_user_profile_pic.png';
import NewSubComment from './NewSubComment';
import SubComment from './SubComment';

function SubComments() {
    var subcomments = [
        {
            id: 1,
            author: {
                firstName: 'Sample',
                lastName: 'User 1',
                profilePic: defaultProfilePic,
                hasCheckmark: true
            },
            text: 'this is a default text'
        },
        {
            id: 2,
            author: {
                firstName: 'Sample',
                lastName: 'User 2',
                profilePic: defaultProfilePic,
                hasCheckmark: true
            },
            text: 'this is a default text'
        },
        {
            id: 3,
            author: {
                firstName: 'Sample',
                lastName: 'User 3',
                profilePic: defaultProfilePic,
                hasCheckmark: false
            },
            text: 'this is a default text'
        },
    ];
    return (
        <div className='subcomments-div'>
            <NewSubComment />
           {subcomments.map((subcomment) => (
                <span key={subcomment.id}>
                    <SubComment subcommentData={subcomment} />
                </span>
           ))}
        </div>
    )
}

export default SubComments;