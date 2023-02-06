import { useState } from 'react';
import FileList from './FileList';
import Modal from '../../Common/Modal';
import FileUploadWidget from '../../Common/FileUploadWidget';
import KnowledgeApi from '../../../api/KnowledgeApi';
import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';
import UploadKnowledgeItemForm from './UploadKnowledgeItemForm';

function KnowledgeSection({post}) {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState(null);
    const [createdItems, setCreatedItems] = useState(0);

    const handleUploadItem = (title, originalAuthors, publishDate) => {
        setShowModal(false);
        setFile(null);
        KnowledgeApi.UploadKnowledgeItem(post.id, currentUser.id, title, originalAuthors, dateFormat(publishDate, 'dd-mm-yyyy'), file).then(newItem => {
            if (newItem.id) {
                post.knowledgeItems.push(newItem);
                setCreatedItems(createdItems + 1);
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
            <FileList items={post.knowledgeItems}/>
        </div>
    )
}

export default KnowledgeSection;