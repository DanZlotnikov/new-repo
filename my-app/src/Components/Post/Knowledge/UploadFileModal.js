import React, { useState, useEffect } from 'react';
import texts from '../../../texts';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function UploadFileModal({onCancel, onSave}) {
  const [fileName, setFileName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [originalAuthors, setOriginalAuthors] = useState('');
  const [publishDate, setPublishDate] = useState(new Date());
  const [error, setError] = useState(false);

  const handleSave = () => {
    if (!fileName || !originalAuthors || !publishDate) setError(true);
    else onSave(fileName, originalAuthors, publishDate)
  }
  
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleCancel = () => {
    setIsOpen(false);
    onCancel();
  }

  return (
    <div className={`modalContainer ${isOpen ? 'open' : ''}`}>
      <div className={`uploadFileModal ${isOpen ? 'open' : ''}`}>
        <button className="closeButton" onClick={handleCancel}>
              &times;
            </button>
            <h2 className='uploadFileHeader'>{texts.knowledge.itemUploadModal.header}</h2>
        <div className='uploadFileForm'>
          <div className='inputDiv'>
            <TextField 
              className='textInput'
              label={texts.knowledge.itemUploadModal.title}
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>
          <div className='inputDiv'>
            <TextField 
              className='textInput'
              label={texts.knowledge.itemUploadModal.originalAuthors}
              onChange={(e) => setOriginalAuthors(e.target.value)}
            />
          </div>
          <div className='datePickerDiv'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={1}>
                <DesktopDatePicker
                  className='datePicker'
                  label="Publish date"
                  inputFormat="DD/MM/YYYY"
                  value={publishDate}
                  onChange={(val) => setPublishDate(val)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>  
          <button className='saveButton' onClick={handleSave}>{texts.general.save}</button>
          {error && 
            <div className='errorDiv'>
              {texts.knowledge.itemUploadModal.modalFieldsError}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default UploadFileModal;
