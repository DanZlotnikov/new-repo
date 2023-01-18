import { FaBrain, FaComment } from 'react-icons/fa';
import { Colors } from '../../../consts';
import { PlatformType } from '../../../consts';
import youtubeIcon from '../../../New folder/youtube_icon.png';
import tiktokIcon from '../../../New folder/tiktok_icon.png';
import spotifyIcon from '../../../New folder/spotify_icon.png';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';

function PopularItem({item}) {
    let platformIcon, platformName;
    switch(item.platform) {
        case PlatformType.Youtube:
            platformIcon = youtubeIcon;
            platformName = PlatformType[item.platform].toLowerCase();
            break;
        case PlatformType.Spotify:
            platformIcon = spotifyIcon;
            platformName = PlatformType[item.platform].toLowerCase();
            break;
        case PlatformType.Tiktok:
            platformIcon = tiktokIcon;
            platformName = PlatformType[item.platform].toLowerCase();
            break;
    }

    return (
        <div className={'item-div ' + platformName} >
            <img src={platformIcon} className='item-type-img'/>
            <div className='thumbnail'>
                <img src={item.thumbnailImg} className={'thumbnail-img ' + platformName} />
                <span className='title ellipsis'>
                    {item.title}
                </span>
            </div>
            <div className='reactions-span'>
                <span className='reaction-counters'>
                    <span className={'brains ' + platformName}>
                        <FaBrain className='counter-icon' color={Colors.brainPink} size={18}/>
                        <span className='counter-number'>
                            {item.upvotes}
                        </span>
                    </span>
                    <span className={'comments ' + platformName}>
                        <FaComment className='counter-icon' color={Colors.discussionBlue} size={16}/>
                        <span className='counter-number'>
                            {item.comments}
                        </span>
                    </span>
                </span>
            </div>
            <img src={item.uploaderImg} className='uploader-img'></img>
        </div>
    )
}

export default PopularItem;