import { useState } from 'react';
import { FaCheckCircle, FaBrain, FaComment } from 'react-icons/fa';
import { Colors } from '../../../consts';
import SubComments from './SubComments/SubComments';
import PostsApi from '../../../api/PostsApi';

function ExistingComment({commentData}) {
    const [subcommentsOpen, setSubcommentsOpen] = useState(false);
    let authorFullName = commentData.author.firstName + ' ' + commentData.author.lastName;
    const addBrainToComment = () => {
        PostsApi.addBrainToComment(commentData.postId, commentData.id, commentData.author.id);
    }
    return (
        <div className='commentDiv'>
            <img className='userProfileImg commentProfileImg' src={commentData.author.profileImgUrl} title={authorFullName} alt={authorFullName}/>
            <span className='existingComment'>
                <span className='reactionCounters commentCounters'>
                    <span className='brains' onClick={() => addBrainToComment()}>
                        <FaBrain className='counterIcon' color={Colors.brainPink} size={18}/>
                        <span className='counter-number'>
                            {commentData.brainsCount}
                        </span>
                    </span>
                    <span className='comments' onClick={() => setSubcommentsOpen(!subcommentsOpen)}>
                        <FaComment className='counterIcon' color={Colors.discussionBlue} size={18}/>
                        <span className='counter-number'>
                            {commentData.subCommentsCount}
                        </span>
                    </span>
                </span>
                <span className='commentAuthorName'>
                    {commentData.author.firstName + ' ' + commentData.author.lastName}
                    {commentData.author.hasCheckmark &&  
                        <span className='checkmarkIcon'>
                            <FaCheckCircle color={Colors.checkmarkBlue} size={13}/>
                        </span>
                    }
                </span>
                <span className='comment-text'>
                    {commentData.message}
                </span> 
            </span>
            <span className='subcommentsContainer'>
                <span className='subcomments'>
                    {!subcommentsOpen &&
                    <span className='seeComments' onClick={() => setSubcommentsOpen(true)}>
                        See all comments
                    </span>
                    }
                    {subcommentsOpen &&
                        <SubComments mainCommentData={commentData} />
                    }
                </span>
            </span>
        </div>
    )
}

export default ExistingComment;