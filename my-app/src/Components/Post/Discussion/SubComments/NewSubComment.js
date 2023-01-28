import { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import profilePicDan from '../../../../New folder/profile_pic_dan.jpg'
import { IoMdSend  } from 'react-icons/io';
import { Colors } from '../../../../consts';
import PostsApi from '../../../../api/PostsApi';
import { useSelector } from 'react-redux';

function NewSubComment({mainCommentData}) {
    const [commentText, setCommentText] = useState('');
    const commentInputRef = useRef(null);
    const loggedInUserId = useSelector((state) => state.authReducer.loggedInUserId);
    
    const createNewSubComment = () => {
        PostsApi.createNewSubComment(mainCommentData.postId, mainCommentData.id, commentText, loggedInUserId)
    }

    return (
        <div className='newSubcommentDiv'>
            <img className='userProfileImg subcommentProfileImg' src={profilePicDan} title='Dan Zlotnikov' alt='Dan Zlotnikov' />
            <span className='newSubcomment'>
                <TextareaAutosize
                    ref={commentInputRef}
                    type='textarea' 
                    className='newSubcommentInp' 
                    placeholder='Add a comment...' 
                    onChange = {(e) => setCommentText(e.target.value)} 
                    />
                <span className='sendIcon' onClick={() => createNewSubComment()}>
                    <IoMdSend size={20} color={Colors.discussionBlue}/>
                </span>
            </span>
        </div>
    )
}

export default NewSubComment;