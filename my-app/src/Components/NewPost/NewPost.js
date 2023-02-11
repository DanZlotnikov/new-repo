import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostSectionCard from '../Common/PostSectionCard';
import { FaBookOpen, FaFire, FaComments, FaCheckCircle } from 'react-icons/fa';
import { Colors } from '../../consts';
import { TextareaAutosize } from '@mui/material';
import texts from '../../texts';
import { Oval } from 'react-loader-spinner';
import { IoMdSend } from 'react-icons/io';
import FileUploadWidget from '../Common/FileUploadWidget';
import UploadKnowledgeItemForm from '../Post/Knowledge/UploadKnowledgeItemForm';
import Modal from '../Common/Modal';

function NewPost() {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const postTextInputRef = useRef(null);
    const [message, setMessage] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState(null);

    const createNewPost = () => {

    }
    
    const handleUploadItem = (title, originalAuthors, publishDate) => {
        setShowModal(false);
        setFile(null);
    }

    const handleCancelModal = () => {
        setFile(null);
        setShowModal(false);
    }

    return (
        <div className='newPostDiv'>
            <div className='newPost'>
                <img className='userProfileImg postImg' src={currentUser.profileImgUrl} title={`${currentUser.firstName} ${currentUser.lastName}`} alt={`${currentUser.firstName} ${currentUser.lastName}`}/>
                <span className='newPostTextCont'>
                <TextareaAutosize
                        ref={postTextInputRef}
                        type='textarea' 
                        className={'postTextInp'}
                        placeholder={`${texts.newPost.newPostInputPlaceholder}, ${currentUser.firstName}?`}
                        value={message}
                        onChange = {(e) => setMessage(e.target.value)} 
                    />
                    <span className='sendDiv'>
                        <span className='postTextLoader'>
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
                        <span className='sendIcon' onClick={createNewPost()}>
                            <IoMdSend size={20} />
                        </span>
                        }
                    </span>
                </span>
            </div>
            <div className='itemAdditionDiv'>
                <span className='itemAdditionBtn'><PostSectionCard icon={<FaBookOpen />} iconColor={Colors.discussionBlue} /></span>
                <span className='itemAdditionBtn'><PostSectionCard icon={<FaFire />} iconColor={Colors.brainPink} /></span>
            </div>
            <FileUploadWidget openFileUploadModal={() => setShowModal(true)} file={file} setFile={setFile} />
            {showModal && 
                <Modal renderComponent={<UploadKnowledgeItemForm handleUploadItem={handleUploadItem} fileName={file.name} />} onCancel={handleCancelModal} />
            }
        </div>
    )
}

export default NewPost;