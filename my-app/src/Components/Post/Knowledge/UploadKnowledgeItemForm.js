import { useState } from 'react';
import texts from '../../../texts';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function UploadKnowledgeItemForm({fileName, handleUploadItem}) {
    const [title, setTitle] = useState('');
    const [originalAuthors, setOriginalAuthors] = useState('');
    const [publishDate, setPublishDate] = useState(new Date('01-01-2000'));
    const [error, setError] = useState(false);
  
    const handleUpload = () => {
        if (!title || !originalAuthors || !publishDate) {
            setError(true);
        }
        else {
            handleUploadItem(title, originalAuthors, publishDate);
        }
    }

    return (
    <div className='uploadItemForm'>
        <div className='uploadFileHeader'>
          <div className='headerText'>
            {texts.knowledge.itemUploadModal.header}
          </div>
          <div className='fileName'>
            {fileName}
          </div>
        </div>
        <div className='uploadFileForm'>
            <div className='inputDiv'>
              <TextField 
                className='textInput'
                label={texts.knowledge.itemUploadModal.title}
                onChange={(e) => setTitle(e.target.value)}
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
            <button className='uploadButton' onClick={handleUpload}>{texts.general.upload}</button>
            {error && 
              <div className='errorDiv'>
                {texts.knowledge.itemUploadModal.modalFieldsError}
              </div>
            }
          </div>
    </div>
    )
}

export default UploadKnowledgeItemForm;