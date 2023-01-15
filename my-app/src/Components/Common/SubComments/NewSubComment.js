import { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import profilePicDan from '../../../New folder/profile-pic-dan.jpg'
import { IoMdSend  } from 'react-icons/io';
import { colors } from '../../../consts';

function NewSubComment() {
    const [comment, setComment] = useState('');
    const commentInputRef = useRef(null);
    
    return (
        <div className='new-subcomment-div'>
            <img className='user-profile-pic subcomment-profile-pic' src={profilePicDan} title='Dan Zlotnikov' />
            <span className='new-subcomment'>
                <TextareaAutosize
                    ref={commentInputRef}
                    type='textarea' 
                    className='new-subcomment-inp' 
                    placeholder='Add a comment...' 
                    onChange = {(e) => setComment(e.target.value)} 
                    />
                <span className='send-icon'>
                    <IoMdSend size={20} color={colors.discussionBlue}/>
                </span>
            </span>
        </div>
    )
}

export default NewSubComment;