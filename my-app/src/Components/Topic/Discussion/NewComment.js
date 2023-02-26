import { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { IoMdSend } from 'react-icons/io';
import DiscussionsApi from '../../../api/DiscussionsApi';
import { useSelector } from 'react-redux';
import texts from '../../../texts';
import { FaCheckCircle } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import { Oval } from 'react-loader-spinner';
import { config } from '../../../config';
import { TutorialStages } from '../../../consts';

function NewComment({commentDataToEdit, tutorialStage, topic, handleCreateComment, handleEditComment}) {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const [message, setMessage] = useState(commentDataToEdit ? commentDataToEdit.message : '');
    const [emptyMsg, setEmptyMsg] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const commentInputRef = useRef(null);

    const createNewComment = () => {
        if (!message) {
            setEmptyMsg(true);
        }
        else if (message.length < config.MAX_CHAR_COUNT) {
            setShowLoader(true);
            DiscussionsApi.CreateNewComment(topic.id, currentUser.id, message).then(newComment => {
                if (newComment && newComment.id > 0) {
                    topic.comments.unshift(newComment);
                    commentInputRef.current.value = '';
                    setMessage('');
                    handleCreateComment();
                }
                setShowLoader(false);
            });
        }
    }
    
    const editComment = () => {
        if (!message) {
            setEmptyMsg(true);
        }
        else {
            setShowLoader(true);
            handleEditComment(commentDataToEdit.id, message).then((res) => {
                commentDataToEdit.message = message;
                commentInputRef.current.value = '';
                setMessage('');
                setEmptyMsg(false);
                setShowLoader(false);
            });
        }
    }
    
    return (
        <div className={`newCommentCont ${tutorialStage === TutorialStages.ExistingTopicAddComment ? 'tutorial' : ''}`}>
            <img className='userProfileImg newCommentProfileImg' src={currentUser.profileImgUrl} title={`${currentUser.firstName} ${currentUser.lastName}`} alt={`${currentUser.firstName} ${currentUser.lastName}`}/>
            { commentDataToEdit && 
                <span className='commentAuthorName'>
                    <span className='authorName'>
                        {commentDataToEdit.author.firstName + ' ' + commentDataToEdit.author.lastName}
                        {commentDataToEdit.author.isVerified &&  
                            <span className='checkmarkIcon'>
                                <FaCheckCircle size={13}/>
                            </span>
                        }
                    </span>
                    <span className={'editingHint ' + (emptyMsg ? 'empty' : '')}>
                        { emptyMsg ? texts().discussions.commentEmptyHint: texts().discussions.commentEditHint }
                    </span>
                </span>
            }
            <span className='newComment'>
            <TextareaAutosize
                    autoFocus={commentDataToEdit ? true : false}
                    ref={commentInputRef}
                    type='textarea' 
                    className={'commentInp ' + (commentDataToEdit ? 'editing' : '')}
                    placeholder={commentDataToEdit ? '' : texts().discussions.newCommentPlaceholder}
                    value={message}
                    onChange = {(e) => setMessage(e.target.value)} 
                />
                <span className='sendDiv'>
                    <span className='loaderDiv commentLoader'>
                        {showLoader &&
                            <Oval
                            className='loaderSpinner'
                            height={18}
                            width={18}
                            strokeWidth={2}
                            strokeWidthSecondary={2}
                        />
                        }
                    </span>
                    {!showLoader &&
                    <span className='sendIcon' onClick={() => commentDataToEdit ? editComment() : createNewComment()}>
                        {commentDataToEdit && 
                                <GiCheckMark size={20} />
                            }
                            {!commentDataToEdit && 
                                <IoMdSend size={20} style={currentUser.language === 'he' ? {transform: 'rotate(180deg)'} : {}}/>
                            }
                        </span>
                    }
                </span>
            </span>
        </div>
    )
}

export default NewComment;