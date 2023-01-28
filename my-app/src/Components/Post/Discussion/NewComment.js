import { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import profilePicDan from '../../../New folder/profile_pic_dan.jpg';
import { IoMdSend  } from 'react-icons/io';
import { Colors } from '../../../consts';
import PostsApi from '../../../api/PostsApi';
import { useSelector } from 'react-redux';

function NewComment({postData}) {
    const [commentText, setCommentText] = useState('');
    const commentInputRef = useRef(null);
    const loggedInUserId = useSelector((state) => state.authReducer.loggedInUserId);

    const createNewComment = () => {
        PostsApi.createNewComment(postData.id, commentText, loggedInUserId).then(response => console.log(response));
    }

    return (
        <div className='discussionSectionDiv'>
            <img className='userProfileImg commentProfileImg' src={profilePicDan} title='Dan Zlotnikov' alt='Dan Zlotnikov'/>
            <span className='newComment'>
                <TextareaAutosize
                    ref={commentInputRef}
                    type='textarea' 
                    className='commentInp' 
                    placeholder='Add an insight...' 
                    onChange = {(e) => setCommentText(e.target.value)} 
                    />
                <span className='sendIcon' onClick={() => createNewComment()}>
                    <IoMdSend size={20} color={Colors.discussionBlue}/>
                </span>
            </span>
        </div>
    )
}

export default NewComment;