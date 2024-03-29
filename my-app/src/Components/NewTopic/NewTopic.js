import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import TopicSectionCard from '../Common/TopicSectionCard';
import { FaBookOpen, FaFire } from 'react-icons/fa';
import { Colors, TutorialStages } from '../../consts';
import { TextareaAutosize } from '@mui/material';
import texts from '../../texts';
import { Oval } from 'react-loader-spinner';
import FileUploadWidget from '../Common/FileUploadWidget';
import UploadKnowledgeItemForm from '../Topic/Knowledge/UploadKnowledgeItemForm';
import Modal from '../Common/Modal';
import UploadPopularItemForm from '../Topic/Popular/UploadPopularItemForm';
import TopicApi from '../../api/TopicApi';

function NewTopic({handleCreateNewTopic, tutorialStage}) {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const topicTextInputRef = useRef(null);
    const [message, setMessage] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [showKnowldegeModal, setShowKnowldegeModal] = useState(false);
    const [showPopularModal, setShowPopularModal] = useState(false);
    const [knowledgeFile, setKnowledgeFile] = useState(null);
    const [knowledgeItem, setKnowledgeItem] = useState({
        info: {
            title: '', 
            originalAuthors: '', 
            publishDate: new Date('01/01/2000')
    }});
    const [popularItem, setPopularItem] = useState({
        info: {
            url: '', 
            platformType: 0,
    }});

    const createNewTopic = () => {
        if (!message) return;
        setShowLoader(true);
        TopicApi.CreateNewTopic(currentUser.id, message, knowledgeItem, knowledgeFile, popularItem).then(newTopic => {
            handleCreateNewTopic(newTopic);
            setMessage('');
            setKnowledgeFile(null);
            setPopularItem({
                info: {
                    url: '', 
                    platformType: 0,
            }});
            setShowLoader(false);
        });
    }
    
    const handleUploadKnowledgeItem = (title, originalAuthors, publishDate) => {
        setKnowledgeItem({...knowledgeItem, info: {
                title: title,
                originalAuthors: originalAuthors,
                publishDate: publishDate
            }
        });
        setShowKnowldegeModal(false);
    }

    const handleUploadPopularItem = (url, platformType) => {
        setPopularItem({...popularItem, info: {
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
                <img className='userProfileImg topicImg' src={currentUser.profileImgPresignedUrlS3} title={`${currentUser.firstName} ${currentUser.lastName}`} alt={`${currentUser.firstName} ${currentUser.lastName}`}/>
                <span className={`newTopicTextCont ${tutorialStage === TutorialStages.NewTopic ? 'tutorial' : ''}`}>
                    <TextareaAutosize
                        ref={topicTextInputRef}
                        type='textarea' 
                        className={'topicTextInp'}
                        placeholder={`${texts().newTopic.newTopicInputPlaceholder}, ${currentUser.firstName}`}
                        value={message}
                        onChange = {(e) => setMessage(e.target.value)}
                        readOnly={tutorialStage === TutorialStages.NewTopic}
                    />
                </span>
                {!showLoader &&
                <span className={`createTopicButton ${tutorialStage === TutorialStages.NewTopicCreate ? 'tutorial' : ''}`} onClick={() => createNewTopic()}>
                    {texts().newTopic.create}
                </span>
                }
                <span className='topicTextLoader'>
                    {showLoader &&
                        <Oval
                        className='loaderSpinner'
                        height={23}
                        width={23}
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                    }
                </span>
            </div>
            
            <div className='itemAdditionDiv'>
                <span className='knowledgeItemAddition'>
                    <span className={`itemAdditionBtn ${knowledgeFile ? 'uploadedKnowledge' : ''} ${tutorialStage === TutorialStages.NewTopicAddKnowledge ? 'tutorial' : ''}`}>
                        <FileUploadWidget uploadButtonIcon={<TopicSectionCard icon={<FaBookOpen />} iconColor={Colors.discussionBlue} />} openFileUploadModal={() => setShowKnowldegeModal(true)} file={knowledgeFile} setFile={setKnowledgeFile} />
                    </span>
                    {knowledgeFile && <span className='knowledgeFileName ellipsis'>{knowledgeFile.name}</span>}
                </span>
                <span className='popularItemAddition' >
                    <span onClick={() => setShowPopularModal(true)} className={`itemAdditionBtn ${popularItem.info.url ? 'uploadedPopular' : ''} ${tutorialStage === TutorialStages.NewTopicAddPopular ? 'tutorial' : ''}`}><TopicSectionCard icon={<FaFire />} iconColor={Colors.brainPink} /></span>
                    {popularItem.info.url && <span className='popularUrl ellipsis'>{popularItem.info.url}</span>}
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