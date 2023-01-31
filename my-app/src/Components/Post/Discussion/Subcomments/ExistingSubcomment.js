import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Colors } from '../../../../consts';
import NewSubcomment from './NewSubcomment';

function ExistingSubcomment({subcommentData, handleEditSubcomment, handleDeleteSubcomment}) {
    const [checkDeleteSure, setCheckDeleteSure] = useState(false);
    const [isEditingSubcomment, setIsEditingSubcomment] = useState(false);
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    let authorFullName = subcommentData.author.firstName + ' ' + subcommentData.author.lastName;

    const deleteSubcomment = () => {
        handleDeleteSubcomment(subcommentData.id);
    }

    const editSubcomment = (message) => {
        setIsEditingSubcomment(false);
        handleEditSubcomment(subcommentData.id, message);
    }

    return (
        <>
            {isEditingSubcomment &&
                <NewSubcomment subcommentDataToEdit={subcommentData} handleEditSubcomment={editSubcomment}/>
            }
            {!isEditingSubcomment &&
                <div className='subcommentDiv'>
                    <img className='userProfileImg subcommentProfileImg' src={subcommentData.author.profileImgUrl} title={authorFullName} alt={authorFullName} />
                    <span className='subcomment'>
                        <span className='subcommentAuthorName'>
                            {subcommentData.author.firstName + ' ' + subcommentData.author.lastName}
                            {subcommentData.author.verified &&  
                                <span className='checkmarkIcon'>
                                    <FaCheckCircle color={Colors.checkmarkBlue} size={13}/>
                                </span>
                            }
                        </span>
                        <span className='subcomment-text'>
                            {subcommentData.message}
                        </span>
                        {currentUser.id === subcommentData.author.id &&
                            <div className='subcommentEditSpan'>
                                {!checkDeleteSure &&
                                    <span>
                                        <span className='editSubcomment' onClick={() => setIsEditingSubcomment(true)}>
                                            Edit
                                        </span>
                                        <span className='deleteSubcomment' onClick={() => setCheckDeleteSure(true)}>
                                            Delete
                                        </span>
                                    </span>
                                }
                                {checkDeleteSure &&
                                    <span className='deleteAreYouSure'>
                                        Are you sure?
                                        <span className='yes' onClick={() => deleteSubcomment(false)}>
                                            Yes
                                        </span>
                                        /
                                        <span className='no' onClick={() => setCheckDeleteSure(false)}>
                                            No
                                        </span>
                                    </span>
                                }
                            </div>
                            }
                    </span>
                </div>
            }
        </>
    )
}

export default ExistingSubcomment;