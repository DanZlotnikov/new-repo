import React from 'react';
import texts from '../../texts';

function FileUploadWidget({openFileUploadModal, file, setFile}) {
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    event.target.value = null;
    openFileUploadModal();
  }

  const handleFileInputClick = (event) => {
    event.target.nextSibling.click();
  }

  return (
    <div className='fileUploadDiv'>
      <span className={'uploadBtn ' + (file ? 'uploaded' : '')} onClick={handleFileInputClick}>
        {file ? file.name : texts.knowledge.uploadItem}
      </span>
      <input type="file" className='defaultUploadBtn' onChange={handleFileChange} />
    </div>
  );
}

export default FileUploadWidget;
