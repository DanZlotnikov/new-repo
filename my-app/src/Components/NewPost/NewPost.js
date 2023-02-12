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
    const [knowledgeFile, setKnowledgeFile] = useState(null);
    const [knowledgeItemInfo, setKnowledgeItemInfo] = useState({info: {
        title: null, 
        originalAuthors: null, 
        publishDate: null
    }});
    const [popularItemInfo, setPopularItemInfo] = useState({info: {
        url: null, 
        platformType: null, 
    }});

    const createNewPost = () => {

    }
    
    const handleUploadKnowledgeItem = (title, originalAuthors, publishDate) => {
        setKnowledgeItemInfo({...knowledgeItemInfo, info: {
                title: title,
                originalAuthors: originalAuthors,
                publishDate: publishDate
            }
        });
        setShowKnowldegeModal(false);
    }

    const handleUploadPopularItem = (url, platformType) => {
        setPopularItemInfo({...popularItemInfo, info: {
                url: url,
                platformType: platformType
            }
        });
        setShowPopularModal(false);
    }

    const cancelKnowledgeModal = () => {
        setKnowledgeFile(null);
        setShowKnowldegeModal(false);
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
                <span className='knowledgeItemAddition'>
                    <span className={`itemAdditionBtn ${knowledgeFile ? 'uploadedKnowledge' : ''}`}>
                        <FileUploadWidget uploadButtonIcon={<PostSectionCard icon={<FaBookOpen />} iconColor={Colors.discussionBlue} />} openFileUploadModal={() => setShowKnowldegeModal(true)} file={knowledgeFile} setFile={setKnowledgeFile} />
                    </span>
                    {knowledgeFile && <span className='knowledgeFileName ellipsis'>{knowledgeFile.name}</span>}
                </span>
                <span className='popularItemAddition' >
                    <span onClick={() => setShowPopularModal(true)} className={`itemAdditionBtn ${popularItemInfo.info.url ? 'uploadedPopular' : ''}`}><PostSectionCard icon={<FaFire />} iconColor={Colors.brainPink} /></span>
                    {popularItemInfo.info.url && <span className='popularUrl ellipsis'>{popularItemInfo.info.url}</span>}
                </span>
            </div>
            {showKnowldegeModal && 
                <Modal renderComponent={<UploadKnowledgeItemForm handleUploadItem={handleUploadKnowledgeItem} fileName={knowledgeFile.name} />} onCancel={cancelKnowledgeModal} />
            }
             {showPopularModal && 
                <Modal renderComponent={<UploadPopularItemForm handleUploadItem={handleUploadPopularItem} />} onCancel={() => setShowPopularModal(false)} />
            }
        </div>
    )
}

export default NewPost;