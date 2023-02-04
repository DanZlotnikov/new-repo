import React, { useState } from 'react';
import texts from '../../texts';
import { RiUploadCloud2Line } from 'react-icons/ri';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className='fileUploadDiv'>
      <span className='uploadBtn'>
        {texts.knowledge.uploadFile}
        <input type="file" className='defaultUploadBtn' onChange={handleFileChange} />
      </span>
      <span className='iconCont'>
        <RiUploadCloud2Line className='uploadIcon' />
      </span>
    </div>
  );
}

export default FileUpload;
