import { useState } from 'react';
import { FaCheckCircle, FaBrain, FaComment } from 'react-icons/fa';
import Subcomments from './Subcomments/Subcomments';
import DiscussionsApi from '../../../api/DiscussionsApi';
import { useSelector } from 'react-redux';
import NewComment from './NewComment';
import EditDeleteSpan from '../../Common/EditDeleteSpan';
import AWS from 'aws-sdk';

function ExistingComment({commentData}) {
    const currentUser = useSelector((state) => state.authReducer.currentUser)
    const [subcommentsOpen, setSubcommentsOpen] = useState(false);
    const [subcommentsAddedByUser, setSubcommentsAddedByUser] = useState(commentData.subcomments.filter(s => s.author.id === currentUser.id).length);
    const [commentBrained, setCommentBrained] = useState(commentData.brainsUserIds.includes(currentUser.id));
    const [isEditingComment, setIsEditingComment] = useState(false);
    
    let authorFullName = commentData.author.firstName + ' ' + commentData.author.lastName;

    const handleEditComment = (commentId, message) => {
        return Promise.resolve(DiscussionsApi.editComment(commentId, message, currentUser.id).then(success => {
            if (success) {
                setIsEditingComment(false);
            }
        }));
    };

    const handleBrainClick = () => {
        if (commentBrained) {
            DiscussionsApi.removeBrainFromComment(commentData.postId, commentData.id, currentUser.id).then(success => {
                if (success) {
                    commentData.brainsUserIds = commentData.brainsUserIds.filter(x => x !== currentUser.id);
                    setCommentBrained(false);
                }
            });
        }
        else {
            DiscussionsApi.addBrainToComment(commentData.postId, commentData.id, currentUser.id).then(success => {
                if (success) {
                    commentData.brainsUserIds.push(currentUser.id);
                    setCommentBrained(true);
                }
            });
        }
    };

    const addSubcomment = () => {
        setSubcommentsAddedByUser(subcommentsAddedByUser + 1);
        setSubcommentsOpen(true);
    };

    const deleteSubcomment = () => {
        setSubcommentsAddedByUser(subcommentsAddedByUser - 1);
    };
    
    AWS.config.update({

    });

    return (
        <>
        {isEditingComment &&
            <NewComment commentDataToEdit={commentData} handleEditComment={handleEditComment}/>
        }
        {!isEditingComment &&
            <div className='commentDiv'>
                <img className='userProfileImg commentProfileImg' src={commentData.author.profileImgUrl} title={authorFullName} alt={authorFullName}/>
                <span className='existingComment'>
                    <span className='reactionCounters commentCounters'>
                        <span className={'brains ' + (commentBrained ? 'brained' : '')} onClick={handleBrainClick}>
                            <FaBrain className='counterIcon brainsIcon' size={18}/>
                            <span className='counter-number '>
                                {commentData.brainsUserIds.length}
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
                                <FaCheckCircle size={13}/>
                            </span>
                        }
                    </span>
                    <span className='comment-text'>
                        {commentData.message}
                    </span> 
                    {currentUser.id === commentData.author.id &&
                        <div className='commentEditSpan'>
                            <EditDeleteSpan handleSetEdit={setIsEditingComment} />
                        </div>
                    }
                </span>
                <span className='subcommentsContainer'>
                    <span className='subcomments'>
                        {!subcommentsOpen && commentData.subcomments.length > 0 &&
                        <span className='seeComments' onClick={() => setSubcommentsOpen(true)}>
                            See all comments
                        </span>
                        }
                        {(subcommentsOpen || commentData.subcomments.length === 0) &&
                            <Subcomments mainCommentData={commentData} addSubcomment={addSubcomment} deleteSubcomment={deleteSubcomment} />
                        }
                    </span>
                </span>
            </div>
        }
        </>
    );
}

export default ExistingComment;