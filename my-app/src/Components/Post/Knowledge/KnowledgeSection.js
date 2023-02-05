import { useState } from 'react';
import FileList from './FileList';
import UploadFileModal from './UploadFileModal';
import FileUploadWidget from '../../Common/FileUploadWidget';

function KnowledgeSection({postData}) {
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState(null);

    const createNewItem = (title, originalAuthors, publishDate) => {
        setShowModal(false);
        setFile(null);
        console.log(title, originalAuthors, publishDate);
    }

    const handleCancelModal = () => {
        setFile(null);
        setShowModal(false);
    }

    return (
        <div className='knowledgeSectionDiv'>
            <FileUploadWidget openFileUploadModal={() => setShowModal(true)} file={file} setFile={setFile} />
            {showModal && 
                <UploadFileModal onCancel={handleCancelModal} onSave={createNewItem}/>
            }
            <FileList items={postData.knowledgeItems}/>
        </div>
    )
}

export default KnowledgeSection;