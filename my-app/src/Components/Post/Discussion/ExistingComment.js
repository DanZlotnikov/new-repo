import { useState } from 'react';
import { FaCheckCircle, FaBrain, FaComment } from 'react-icons/fa';
import { Colors } from '../../../consts';
import Subcomments from './Subcomments/Subcomments';
import PostsApi from '../../../api/PostsApi';
import { useSelector } from 'react-redux';

function ExistingComment({commentData}) {
    const currentUser = useSelector((state) => state.authReducer.currentUser)
    const [subcommentsOpen, setSubcommentsOpen] = useState(false);
    const [subcommentsAddedByUser, setSubcommentsAddedByUser] = useState(commentData.subcomments.filter(s => s.author.id === currentUser.id).length);
    const [commentBrained, setCommentBrained] = useState(false);
    let authorFullName = commentData.author.firstName + ' ' + commentData.author.lastName;
    
    const addBrainToComment = () => {
        if (commentBrained) {
            PostsApi.removeBrainFromComment(commentData.postId, commentData.id, currentUser.id).then(success => {
                if (success) {
                    commentData.brainsCount--;
                    setCommentBrained(false);
                }
            });
        }
        else {
            PostsApi.addBrainToComment(commentData.postId, commentData.id, currentUser.id).then(success => {
                if (success) {
                    commentData.brainsCount++;
                    setCommentBrained(true);
                }
            });
        }
    }

    const addSubcomment = () => {
        setSubcommentsAddedByUser(subcommentsAddedByUser + 1);
    }

    const deleteSubcomment = () => {
        setSubcommentsAddedByUser(subcommentsAddedByUser - 1);
    }

    return (
        <div className='commentDiv'>
            <img className='userProfileImg commentProfileImg' src={commentData.author.profileImgUrl} title={authorFullName} alt={authorFullName}/>
            <span className='existingComment'>
                <span className='reactionCounters commentCounters'>
                    <span className={'brains ' + (commentBrained ? 'brained' : '')} onClick={() => addBrainToComment()}>
                        <FaBrain className='counterIcon brainsIcon' size={18}/>
                        <span className='counter-number '>
                            {commentData.brainsCount}
                        </span>
                    </span>
                    <span className={'comments ' + (subcommentsAddedByUser > 0 ? 'commented' : '')} onClick={() => setSubcommentsOpen(!subcommentsOpen)}>
                        <FaComment className='counterIcon commentsIcon' size={18}/>
                        <span className='counter-number'>
                            {commentData.subcomments.length}
                        </span>
                    </span>
                </span>
                <span className='commentAuthorName'>
                    {commentData.author.firstName + ' ' + commentData.author.lastName}
                    {commentData.author.verified &&  
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
                    {!subcommentsOpen && commentData.subcomments.length > 0 &&
                    <span className='seeComments' onClick={() => setSubcommentsOpen(true)}>
                        See all comments
                    </span>
                    }
                    {subcommentsOpen &&
                        <Subcomments mainCommentData={commentData} addSubcomment={addSubcomment} deleteSubcomment={deleteSubcomment} />
                    }
                </span>
            </span>
        </div>
    )
}

export default ExistingComment;