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
import UploadPopularItemForm from '../Post/Popular/UploadPopularItemForm';

function NewPost() {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const postTextInputRef = useRef(null);
    const [message, setMessage] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [showKnowldegeModal, setShowKnowldegeModal] = useState(false);
    const [showPopularModal, setShowPopularModal] = useState(false);
    const [file, setFile] = useState(null);

    const createNewPost = () => {

    }
    
    const handleUploadKnowledgeItem = (title, originalAuthors, publishDate) => {
        setShowKnowldegeModal(false);
        setFile(null);
    }

    const handleUploadPopularItem = (title, originalAuthors, publishDate) => {
        setShowPopularModal(false);
        setFile(null);
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
                <span className='itemAdditionBtn'><FileUploadWidget uploadButtonIcon={<PostSectionCard icon={<FaBookOpen />} iconColor={Colors.discussionBlue} />} openFileUploadModal={() => setShowKnowldegeModal(true)} file={file} setFile={setFile} /></span>
                <span onClick={() => setShowPopularModal(true)} className='itemAdditionBtn'><PostSectionCard icon={<FaFire />} iconColor={Colors.brainPink} /></span>
            </div>
            {showKnowldegeModal && 
                <Modal renderComponent={<UploadKnowledgeItemForm handleUploadItem={handleUploadKnowledgeItem} fileName={file.name} />} onCancel={() => setShowKnowldegeModal(false)} />
            }
             {showPopularModal && 
                <Modal renderComponent={<UploadPopularItemForm handleUploadItem={handleUploadPopularItem} />} onCancel={() => setShowPopularModal(false)} />
            }
        </div>
    )
}

export default NewPost;