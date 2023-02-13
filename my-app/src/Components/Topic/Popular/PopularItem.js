import { FaBrain } from 'react-icons/fa';
import { PopularPlatformType } from '../../../consts';
import youtubeIcon from '../../../New folder/youtube_icon.png';
import tiktokIcon from '../../../New folder/tiktok_icon.png';
import spotifyIcon from '../../../New folder/spotify_icon.png';
import { TikTok } from "react-tiktok";
import { useSelector } from 'react-redux';
import PopularApi from '../../../api/PopularApi';
import { useState } from 'react';

function PopularItem({item}) {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const [itemBrained, setItemBrained] = useState(item.brainsUserIds.includes(currentUser.id));
    
    let platformIcon;
    let platformName = PopularPlatformType.find(x => x.val === item.platformType).name.toLowerCase();
    let uploaderFullName = item.uploader.firstName + ' ' + item.uploader.lastName;
    
    
    switch(platformName) {
        case 'youtube':
            platformIcon = youtubeIcon;
            break;
        case 'spotify':
            platformIcon = spotifyIcon;
            break;
        case 'tiktok':
            platformIcon = tiktokIcon;
            break;
        default:
            break;
    }

    const handleBrainClick = () => {
        if (itemBrained) {
            PopularApi.RemoveBrainFromPopularItem(item.topicId, item.id, currentUser.id).then(success => {
                if (success) {
                    item.brainsUserIds = item.brainsUserIds.filter(x => x !== currentUser.id);
                    setItemBrained(false);
                }
            });
        }
        else {
            PopularApi.AddBrainToPopularItem(item.topicId, item.id, currentUser.id).then(success => {
                if (success) {
                    item.brainsUserIds.push(currentUser.id);
                    setItemBrained(true);
                }
            });
        }
    }

    return (
        <div className={'itemDiv ' + platformName}>
            <img src={item.uploader.profileImgUrl} className={`uploaderImg ${platformName}`} title={uploaderFullName} alt={uploaderFullName}></img>
            <span className={`reactionCounters ${platformName}`}>
                <span className={'brains ' + (itemBrained ? 'brained' : '')} onClick={handleBrainClick}>
                    <FaBrain className='counterIcon brainsIcon' size={18}/>
                    <span className='counter-number'>
                        {item.brainsUserIds.length}
                    </span>
                </span>
                {/* <span className='comments'>
                    <FaComment className='counterIcon commentsIcon' size={16}/>
                    <span className='counter-number'>
                        {item.commentsCount}
                    </span>
                </span> */}
            </span>
            <div className='thumbnail'>
                {platformName === 'tiktok' ? 
                    <TikTok url={item.iframeUrl} />
                    :
                    <iframe 
                    className={'thumbnailIframe ' + platformName} 
                    src={item.iframeUrl}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    scrolling="no"
                    />
                }
                <img src={platformIcon} className={'itemTypeImg ' + platformName} title={platformName} alt={platformName}/>
            </div>
        </div>
    )
}

export default PopularItem;