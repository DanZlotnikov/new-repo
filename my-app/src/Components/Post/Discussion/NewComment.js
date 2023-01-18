import { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import profilePicDan from '../../../New folder/profile_pic_dan.jpg';
import { IoMdSend  } from 'react-icons/io';
import { Colors } from '../../../consts';

function NewComment() {
    const [comment, setComment] = useState('');
    const commentInputRef = useRef(null);
    
    return (
        <div className='new-comment-div'>
            <img className='user-profile-img comment-profile-img' src={profilePicDan} title='Dan Zlotnikov' />
            <span className='new-comment'>
                <TextareaAutosize
                    ref={commentInputRef}
                    type='textarea' 
                    className='comment-inp' 
                    placeholder='Add an insight...' 
                    onChange = {(e) => setComment(e.target.value)} 
                    />
                <span className='send-icon'>
                    <IoMdSend size={20} color={Colors.discussionBlue}/>
                </span>
            </span>
        </div>
    )
}

export default NewComment;