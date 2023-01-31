import { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import profilePicDan from '../../../../New folder/profile_pic_dan.jpg'
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { GiCheckMark } from 'react-icons/gi';
import { Colors } from '../../../../consts';

function NewSubcomment({subcommentDataToEdit, handleEditSubcomment, handleAddSubcomment}) {
    const [subcommentText, setSubcommentText] = useState(subcommentDataToEdit ? subcommentDataToEdit.message : '');
    const commentInputRef = useRef(null);
    
    const addSubcomment = () => {
        handleAddSubcomment(subcommentText);
        commentInputRef.current.value = '';
        setSubcommentText('');
    }

    const editSubcomment = () => {
        handleEditSubcomment(subcommentText);
        commentInputRef.current.value = '';
        setSubcommentText('');
    }

    return (
        <div className='newSubcommentDiv'>
            <img className='userProfileImg subcommentProfileImg' src={profilePicDan} title='Dan Zlotnikov' alt='Dan Zlotnikov' />
            <span className='newSubcomment'>
                { subcommentDataToEdit && 
                    <span className='subcommentAuthorName'>
                        {subcommentDataToEdit.author.firstName + ' ' + subcommentDataToEdit.author.lastName}
                        {subcommentDataToEdit.author.verified &&  
                            <span className='checkmarkIcon'>
                                <FaCheckCircle color={Colors.checkmarkBlue} size={13}/>
                            </span>
                        }
                        <span className='editingHint'>
                            [Editing]
                        </span>
                    </span>
                }
                <TextareaAutosize
                    ref={commentInputRef}
                    type='textarea' 
                    className={'newSubcommentInp ' + (subcommentDataToEdit ? 'editing' : '')}
                    placeholder={subcommentDataToEdit ? '' : 'Add a comment...'}
                    value={subcommentText}
                    onChange = {(e) => setSubcommentText(e.target.value)} 
                    />
                <span className='sendIcon' onClick={() => subcommentDataToEdit ? editSubcomment() : addSubcomment()}>
                    {subcommentDataToEdit && 
                        <GiCheckMark size={20} color={Colors.discussionBlue} />
                    }
                    {!subcommentDataToEdit && 
                        <IoMdSend size={20} color={Colors.discussionBlue} />
                    }
                </span>
            </span>
        </div>
    )
}

export default NewSubcomment;