import { useState } from 'react';
import FileList from './FileList';
import UploadFileModal from './UploadFileModal';
import FileUploadWidget from '../../Common/FileUploadWidget';

function KnowledgeSection({postData}) {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div className='knowledgeSectionDiv'>
            <FileUploadWidget openFileUploadModal={() => setShowModal(true)}/>
            {showModal && <UploadFileModal onClose={() => setShowModal(false)} />}
            <FileList items={postData.knowledgeItems}/>
        </div>
    )
}

export default KnowledgeSection;