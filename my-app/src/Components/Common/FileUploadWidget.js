import React from 'react';
import texts from '../../texts';
import { FiUpload } from 'react-icons/fi';

function FileUploadWidget({ openFileUploadModal, file, setFile }) {
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    event.target.value = null;
    openFileUploadModal();
  };

  const handleFileInputClick = (event) => {
    event.target.nextSibling.click();
  };

  return (
    <div className='paperUploadDiv'>
      <span className={'uploadBtn ' + (file ? 'uploaded' : '')} onClick={handleFileInputClick}>
        {file ? file.name : texts.knowledge.uploadItem}
      </span>
      <input type="file" className='defaultUploadBtn' onChange={handleFileChange} />
      {file &&
        <span className='iconCont'>
          <FiUpload className='uploadIcon' />
        </span>
      }
    </div>
  );
}

export default FileUploadWidget;
