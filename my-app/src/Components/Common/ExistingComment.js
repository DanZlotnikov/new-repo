import { FaCheckCircle, FaBrain, FaComment } from 'react-icons/fa';
import { colors } from '../../consts';

function ExistingComment({commentData}) {
    return (
        <div className='comment-div'>
            <img className='user-profile-pic comment-profile-pic' src={commentData.author.profilePic} title={commentData.author.firstName + ' ' + commentData.author.lastName}/>
            
            <span className='existing-comment'>
                <span className='comment-reaction-counters'>
                    <span className='brains'>
                        <FaBrain className='counter-icon' color={colors.brainPink} size={18}/>
                        <span className='counter-number'>
                            3.2K
                        </span>
                    </span>
                    <span className='comments'>
                        <FaComment className='counter-icon' color={colors.discussionBlue} size={18}/>
                        <span className='counter-number'>
                            825
                        </span>
                    </span>
                </span>
                <span className='comment-author-name'>
                    {commentData.author.firstName + ' ' + commentData.author.lastName}
                    {commentData.author.hasCheckmark &&  
                        <span className='checkmark-icon'>
                            <FaCheckCircle color={colors.checkmarkBlue} size={13}/>
                        </span>
                    }
                </span>
                <span className='comment-text'>
                    {commentData.text}
                </span> 
            </span>
            <span className='subcomments-container'>
                <span className='subcomments'>
                    <span className='see-comments'>
                        See all comments
                    </span>
                </span>
            </span>
        </div>
    )
}

export default ExistingComment;