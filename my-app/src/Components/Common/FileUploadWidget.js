import React from 'react';
import texts from '../../texts';

function FileUploadWidget({uploadButtonIcon, openFileUploadModal, file, setFile}) {
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    event.target.value = null;
    openFileUploadModal();
  }

  const handleFileInputClick = (event) => {
    event.target.closest('.fileUploadDiv').getElementsByClassName('defaultUploadBtn')[0].click();
  }

  return (
    <div className='fileUploadDiv'>
      {!uploadButtonIcon && 
        <span className={'uploadBtn ' + (file ? 'uploaded' : '')} onClick={handleFileInputClick}>
          {file ? file.name : texts().knowledge.uploadItem}
        </span>
      }
      {uploadButtonIcon && 
        <span className={file ? 'uploaded' : ''} onClick={handleFileInputClick}>
          {uploadButtonIcon}
        </span >
      }
      <input type="file" className='defaultUploadBtn' onChange={handleFileChange} />
    </div>
  );
}

export default FileUploadWidget;
