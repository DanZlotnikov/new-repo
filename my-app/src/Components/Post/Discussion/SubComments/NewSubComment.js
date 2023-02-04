import { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import profilePicDan from '../../../../New folder/profile_pic_dan.jpg'
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { GiCheckMark } from 'react-icons/gi';
import texts from '../../../../texts';
import { Oval } from 'react-loader-spinner';

function NewSubcomment({subcommentDataToEdit, handleEditSubcomment, handleAddSubcomment}) {
    const [message, setMessage] = useState(subcommentDataToEdit ? subcommentDataToEdit.message : '');
    const commentInputRef = useRef(null);
    const [showLoader, setShowLoader] = useState(false);
    
    const addSubcomment = () => {
        if (message) {
            setShowLoader(true);
            handleAddSubcomment(message).then((res) => {
                setShowLoader(false);
            });
            commentInputRef.current.value = '';
            setMessage('');
        }
    }

    const editSubcomment = () => {
        setShowLoader(true);
        handleEditSubcomment(message).then((res) => {
            commentInputRef.current.value = '';
            setMessage('');
            setShowLoader(false);
        });
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
                                <FaCheckCircle size={13}/>
                            </span>
                        }
                        <span className='editingHint'>
                            {texts.discussions.commentEditHint}
                        </span>
                    </span>
                }
                <TextareaAutosize
                    autoFocus={subcommentDataToEdit ? true : false}
                    ref={commentInputRef}
                    type='textarea' 
                    className={'newSubcommentInp ' + (subcommentDataToEdit ? 'editing' : '')}
                    placeholder={subcommentDataToEdit ? '' : texts.discussions.newSubcommentPlaceholder}
                    value={message}
                    onChange = {(e) => setMessage(e.target.value)} 
                />
                <span className='sendDiv'>
                    <span className='commentLoader'>
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
                        <span className='sendIcon' onClick={() => subcommentDataToEdit ? editSubcomment() : addSubcomment()}>
                            {subcommentDataToEdit && 
                                <GiCheckMark size={20}  />
                            }
                            {!subcommentDataToEdit && 
                                <IoMdSend size={20} />
                            }
                        </span>
                    }
                </span>
            </span>
        </div>
    )
}

export default NewSubcomment;