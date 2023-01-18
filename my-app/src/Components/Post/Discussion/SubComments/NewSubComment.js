import { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import profilePicDan from '../../../../New folder/profile_pic_dan.jpg'
import { IoMdSend  } from 'react-icons/io';
import { Colors } from '../../../../consts';

function NewSubComment() {
    const [comment, setComment] = useState('');
    const commentInputRef = useRef(null);
    
    return (
        <div className='new-subcomment-div'>
            <img className='user-profile-img subcomment-profile-img' src={profilePicDan} title='Dan Zlotnikov' />
            <span className='new-subcomment'>
                <TextareaAutosize
                    ref={commentInputRef}
                    type='textarea' 
                    className='new-subcomment-inp' 
                    placeholder='Add a comment...' 
                    onChange = {(e) => setComment(e.target.value)} 
                    />
                <span className='send-icon'>
                    <IoMdSend size={20} color={Colors.discussionBlue}/>
                </span>
            </span>
        </div>
    )
}

export default NewSubComment;