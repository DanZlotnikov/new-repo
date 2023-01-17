import { useState } from 'react';
import { FaCheckCircle, FaBrain, FaComment } from 'react-icons/fa';
import { colors } from '../../../consts';
import SubComments from './SubComments/SubComments';

function ExistingComment({commentData}) {
    const [subcommentsOpen, setSubcommentsOpen] = useState(false)
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
                    <span className='comments' onClick={() => setSubcommentsOpen(!subcommentsOpen)}>
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
                    {!subcommentsOpen &&
                    <span className='see-comments' onClick={() => setSubcommentsOpen(true)}>
                        See all comments
                    </span>
                    }
                    {subcommentsOpen &&
                        <SubComments />
                    }
                </span>
            </span>
        </div>
    )
}

export default ExistingComment;