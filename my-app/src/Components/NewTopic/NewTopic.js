import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TopicSectionCard from '../Common/TopicSectionCard';
import { FaBookOpen, FaFire, FaComments, FaCheckCircle } from 'react-icons/fa';
import { Colors } from '../../consts';
import { TextareaAutosize } from '@mui/material';
import texts from '../../texts';
import { Oval } from 'react-loader-spinner';
import { IoMdSend } from 'react-icons/io';
import FileUploadWidget from '../Common/FileUploadWidget';
import UploadKnowledgeItemForm from '../Topic/Knowledge/UploadKnowledgeItemForm';
import Modal from '../Common/Modal';
import UploadPopularItemForm from '../Topic/Popular/UploadPopularItemForm';

function NewTopic() {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const topicTextInputRef = useRef(null);
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

    const createNewTopic = () => {

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
        <div className='newTopicDiv'>
            <div className='newTopic'>
                <img className='userProfileImg topicImg' src={currentUser.profileImgUrl} title={`${currentUser.firstName} ${currentUser.lastName}`} alt={`${currentUser.firstName} ${currentUser.lastName}`}/>
                <span className='newTopicTextCont'>
                <TextareaAutosize
                        ref={topicTextInputRef}
                        type='textarea' 
                        className={'topicTextInp'}
                        placeholder={`${texts.newTopic.newTopicInputPlaceholder}, ${currentUser.firstName}`}
                        value={message}
                        onChange = {(e) => setMessage(e.target.value)} 
                    />
                    <span className='sendDiv'>
                        <span className='topicTextLoader'>
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
                        <span className='sendIcon' onClick={createNewTopic()}>
                            <IoMdSend size={20} />
                        </span>
                        }
                    </span>
                </span>
            </div>
            <div className='itemAdditionDiv'>
                <span className='knowledgeItemAddition'>
                    <span className={`itemAdditionBtn ${knowledgeFile ? 'uploadedKnowledge' : ''}`}>
                        <FileUploadWidget uploadButtonIcon={<TopicSectionCard icon={<FaBookOpen />} iconColor={Colors.discussionBlue} />} openFileUploadModal={() => setShowKnowldegeModal(true)} file={knowledgeFile} setFile={setKnowledgeFile} />
                    </span>
                    {knowledgeFile && <span className='knowledgeFileName ellipsis'>{knowledgeFile.name}</span>}
                </span>
                <span className='popularItemAddition' >
                    <span onClick={() => setShowPopularModal(true)} className={`itemAdditionBtn ${popularItemInfo.info.url ? 'uploadedPopular' : ''}`}><TopicSectionCard icon={<FaFire />} iconColor={Colors.brainPink} /></span>
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

export default NewTopic;