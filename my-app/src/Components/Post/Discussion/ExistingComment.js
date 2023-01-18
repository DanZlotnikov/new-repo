import { useState } from 'react';
import { FaCheckCircle, FaBrain, FaComment } from 'react-icons/fa';
import { Colors } from '../../../consts';
import SubComments from './SubComments/SubComments';

function ExistingComment({commentData}) {
    const [subcommentsOpen, setSubcommentsOpen] = useState(false)
    return (
        <div className='comment-div'>
            <img className='user-profile-img comment-profile-img' src={commentData.author.profilePic} title={commentData.author.firstName + ' ' + commentData.author.lastName}/>
            <span className='existing-comment'>
                <span className='reaction-counters comment-counters'>
                    <span className='brains'>
                        <FaBrain className='counter-icon' color={Colors.brainPink} size={18}/>
                        <span className='counter-number'>
                            3.2K
                        </span>
                    </span>
                    <span className='comments' onClick={() => setSubcommentsOpen(!subcommentsOpen)}>
                        <FaComment className='counter-icon' color={Colors.discussionBlue} size={18}/>
                        <span className='counter-number'>
                            825
                        </span>
                    </span>
                </span>
                <span className='comment-author-name'>
                    {commentData.author.firstName + ' ' + commentData.author.lastName}
                    {commentData.author.hasCheckmark &&  
                        <span className='checkmark-icon'>
                            <FaCheckCircle color={Colors.checkmarkBlue} size={13}/>
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