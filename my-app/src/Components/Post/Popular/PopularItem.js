import { FaBrain, FaComment } from 'react-icons/fa';
import { Colors } from '../../../consts';
import { PopularPlatformType } from '../../../consts';
import youtubeIcon from '../../../New folder/youtube_icon.png';
import tiktokIcon from '../../../New folder/tiktok_icon.png';
import spotifyIcon from '../../../New folder/spotify_icon.png';
import { TikTok } from "react-tiktok";

function PopularItem({item}) {
    let platformIcon, platformName;
    let uploaderFullName = item.uploader.firstName + ' ' + item.uploader.lastName;

    switch(PopularPlatformType[item.platformType]) {
        case 'youtube':
            platformIcon = youtubeIcon;
            platformName = PopularPlatformType[item.platformType];
            break;
        case 'spotify':
            platformIcon = spotifyIcon;
            platformName = PopularPlatformType[item.platformType];
            break;
        case 'tiktok':
            platformIcon = tiktokIcon;
            platformName = PopularPlatformType[item.platformType];
            break;
        default:
            break;
    }

    return (
        <div className={'itemDiv ' + platformName} >
            <img src={platformIcon} className={'itemTypeImg ' + platformName} title={platformName} alt={platformName}/>
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
                
            </div>
            <div className={'footer ' + platformName}>
                <span className='reactionCounters'>
                    <span className='brains'>
                        <FaBrain className='counterIcon' color={Colors.brainPink} size={18}/>
                        <span className='counter-number'>
                            {item.brainsCount}
                        </span>
                    </span>
                    <span className='comments'>
                        <FaComment className='counterIcon' color={Colors.discussionBlue} size={16}/>
                        <span className='counter-number'>
                            {item.commentsCount}
                        </span>
                    </span>
                </span>
                <img src={item.uploader.profileImgUrl} className='uploaderImg' title={uploaderFullName} alt={uploaderFullName}></img>
            </div>
        </div>
    )
}

export default PopularItem;