import { FaBrain, FaComment } from 'react-icons/fa';
import { Colors } from '../../../consts';
import { PopularPlatformType } from '../../../consts';
import youtubeIcon from '../../../New folder/youtube_icon.png';
import tiktokIcon from '../../../New folder/tiktok_icon.png';
import spotifyIcon from '../../../New folder/spotify_icon.png';
import { TikTok } from "react-tiktok";

function PopularItem({item}) {
    let platformIcon, platformName;
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
    }

    return (
        <div className={'item-div ' + platformName} >
            <img src={platformIcon} className={'item-type-img ' + platformName}/>
            <div className='thumbnail'>
                {platformName == 'tiktok' ? 
                    <TikTok url={item.iframeUrl} />
                :
                    <iframe 
                        className={'thumbnail-iframe ' + platformName} 
                        src={item.iframeUrl}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        scrolling="no"
                    />
                }
                
            </div>
            <div className={'footer ' + platformName}>
                <span className='reaction-counters'>
                    <span className='brains'>
                        <FaBrain className='counter-icon' color={Colors.brainPink} size={18}/>
                        <span className='counter-number'>
                            {item.brainsCount}
                        </span>
                    </span>
                    <span className='comments'>
                        <FaComment className='counter-icon' color={Colors.discussionBlue} size={16}/>
                        <span className='counter-number'>
                            {item.commentsCount}
                        </span>
                    </span>
                </span>
                <img src={item.author.profileImgUrl} className='uploader-img'></img>
            </div>
        </div>
    )
}

export default PopularItem;