import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import NewSubcomment from './NewSubcomment';
import EditDeleteSpan from '../../../Common/EditDeleteSpan';

function ExistingSubcomment({subcommentData, handleEditSubcomment, handleDeleteSubcomment}) {
    const [isEditingSubcomment, setIsEditingSubcomment] = useState(false);
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    let authorFullName = subcommentData.author.firstName + ' ' + subcommentData.author.lastName;

    const deleteSubcomment = () => {
        handleDeleteSubcomment(subcommentData.id);
    }

    const editSubcomment = (message) => {
        return Promise.resolve(handleEditSubcomment(subcommentData.id, message).then((res) => {
            setIsEditingSubcomment(false);
        }));
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
                            {subcommentData.author.isVerified &&  
                                <span className='checkmarkIcon'>
                                    <FaCheckCircle size={13}/>
                                </span>
                            }
                        </span>
                        <span className='subcomment-text'>
                            {subcommentData.message}
                        </span>
                        {currentUser.id === subcommentData.author.id &&
                            <div className='subcommentEditSpan'>
                                <EditDeleteSpan handleSetEdit={setIsEditingSubcomment} handleDelete={deleteSubcomment}/>
                            </div>
                        }
                    </span>
                </div>
            }
        </>
    )
}

export default ExistingSubcomment;