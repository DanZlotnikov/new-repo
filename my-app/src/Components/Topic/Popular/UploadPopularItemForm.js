import { useState } from 'react';
import texts from '../../../texts';
import TextField from '@mui/material/TextField';
import { ListItemIcon, MenuItem, Select } from '@mui/material';
import { PopularPlatformType } from '../../../consts';
import { FaYoutube, FaSpotify, FaTiktok } from 'react-icons/fa';
import { Colors } from '../../../consts';

function UploadPopularItemForm({handleUploadItem}) {
  const [url, setUrl] = useState('');
  const [platformType, setPlatformType] = useState(1);
  const [error, setError] = useState(false);

  const handleUpload = () => {
    if (!url) {
      setError(true);
    }
    else {
      handleUploadItem(url, platformType);
    }
  }

  return (
    <div className='uploadPopularItemForm'>
        <div className='uploadFileHeader'>
          <div className='headerText'>
            {texts().popular.itemUploadModal.header}
          </div>
        </div>
        <div className='uploadFileForm'>
            <div className='inputDiv'>
              <TextField 
                className='textInput'
                label={texts().popular.itemUploadModal.url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className='inputDiv'>
            <Select
              defaultValue={1}
              className='platformSelect'
              onChange={(selected) => setPlatformType(selected.target.value)}
            >
              {PopularPlatformType.map((platform) => {
                let platformIcon;
                switch (platform.name.toLowerCase()) {
                  case 'youtube':
                    platformIcon = <FaYoutube size={20} className='platformIcon' color={Colors.youtubeRed}/>;
                    break;
                  case 'spotify':
                    platformIcon = <FaSpotify size={20} className='platformIcon' color={Colors.spotifyGreen} />;
                    break;
                  case 'tiktok':
                    platformIcon = <FaTiktok size={20} className='platformIcon' color={Colors.tiktokBlack} />;
                    break;
                  default:
                    break;
                }
                return (
                  <MenuItem value={platform.val} className='platformMenuItem'>
                    <ListItemIcon>
                      {platformIcon}
                    </ListItemIcon>
                      <span className='platformName'>{platform.name}</span>
                  </MenuItem>
                )}
              )}
            </Select>
            </div>
            <button className='uploadButton' onClick={handleUpload}>{texts().general.upload}</button>
            {error && 
              <div className='errorDiv'>
                {texts().knowledge.itemUploadModal.modalFieldsError}
              </div>
            }
          </div>
    </div>
  )
}

export default UploadPopularItemForm;