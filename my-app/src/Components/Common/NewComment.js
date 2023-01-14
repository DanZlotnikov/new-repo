import { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import profilePicDan from '../../New folder/profile-pic-dan.jpg'
import { IoMdSend  } from 'react-icons/io';
import { colors } from '../../consts';

function NewComment() {
    const [comment, setComment] = useState('');
    const commentInputRef = useRef(null);
    
    return (
        <div className='new-comment-div'>
            <img className='user-profile-pic comment-profile-pic' src={profilePicDan} title='Dan Zlotnikov' />
            <span className='new-comment'>
                <TextareaAutosize
                    ref={commentInputRef}
                    type='textarea' 
                    className='comment-inp' 
                    placeholder='Add an insight...' 
                    onChange = {(e) => setComment(e.target.value)} 
                    />
                <span className='send-icon'>
                    <IoMdSend size={20} color={colors.discussionBlue}/>
                </span>
            </span>
        </div>
    )
}

export default NewComment;