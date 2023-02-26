import { useState } from 'react';
import FileList from './FileList';
import Modal from '../../Common/Modal';
import FileUploadWidget from '../../Common/FileUploadWidget';
import KnowledgeApi from '../../../api/KnowledgeApi';
import { useSelector } from 'react-redux';
import UploadKnowledgeItemForm from './UploadKnowledgeItemForm';

function KnowledgeSection({topic, updateDataCount}) {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState(null);

    const handleUploadItem = (title, originalAuthors, publishDate) => {
        setShowModal(false);
        KnowledgeApi.UploadKnowledgeItem(topic.id, currentUser.id, title, originalAuthors, publishDate, file).then(newItem => {
            setFile(null);
            if (newItem.id) {
                topic.knowledgeItems.push(newItem);
                updateDataCount();
            }
        });
    }

    const handleCancelModal = () => {
        setFile(null);
        setShowModal(false);
    }

    return (
        <div className='knowledgeSectionDiv'>
            <FileUploadWidget openFileUploadModal={() => setShowModal(true)} file={file} setFile={setFile} />
            {showModal && 
                <Modal renderComponent={<UploadKnowledgeItemForm handleUploadItem={handleUploadItem} fileName={file.name} />} onCancel={handleCancelModal} />
            }
            <FileList items={topic.knowledgeItems}/>
        </div>
    )
}

export default KnowledgeSection;