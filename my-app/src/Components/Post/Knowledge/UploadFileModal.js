import React, { useState } from "react";
import texts from '../../../texts';

function UploadFileModal({onClose}) {
  const [fileName, setFileName] = useState('');
  const [originalAuthors, setOriginalAuthors] = useState('');
  const [publishDate, setPublishDate] = useState('');

  return (
    <div className="modalContainer">
      <div className="uploadFileModal">
         <button className="closeButton" onClick={onClose}>
          &times;
        </button>
        <h2>{texts.knowledge.itemUploadModal.header}</h2>
        <input
          type="text"
          placeholder="File name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <input
          type="text"
          placeholder={texts.knowledge.itemUploadModal.originalAuthors}
          value={originalAuthors}
          onChange={(e) => setOriginalAuthors(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
            label={texts.knowledge.itemUploadModal.publishDate}
            value={value}
            onChange={(newValue) => setPublishDate(newValue)}
            format="DD / MM / YYYY"
            />
        </LocalizationProvider>

        <button>Save</button>
      </div>
    </div>
  );
};

export default UploadFileModal;
