import PopularItem from './PopularItem';
import { PlatformType } from '../../../consts';
import profilePicMan from '../../../New folder/profile_pic_man.jpg';
import profilePicWoman from '../../../New folder/profile_pic_woman.png';
import profilePicMargot from '../../../New folder/profile_pic_margot.jpg';
import dicaprioThumbnail from '../../../New folder/dicaprio_thumbnail.jpg';
import tiktokThumbnail from '../../../New folder/tiktok_thumbnail.PNG';
import spotifyThumbnail from '../../../New folder/spotify_thumbnail.PNG';

function PopularSection() {
    var popularItems = [
        {
            id: 1,
            title: 'Leonardo DiCaprio winning Best Actor | 88th Oscars (2016)',
            platform: PlatformType.Youtube,
            iframeUrl: 'https://www.youtube.com/embed/xpyrefzvTpI',
            uploaderImg: profilePicWoman,
            upvotes: '1.2M',
            comments: '69K'
            
        },
        {
            id: 2,
            title: 'The Joe Rogan Experience #1776 – Steven E. Koonin',
            platform: PlatformType.Spotify,
            iframeUrl: 'https://open.spotify.com/embed/episode/76RdMG5Tne7H9jaP7mhkdk/video?utm_source=generator&theme=0',
            uploaderImg: profilePicMan,
            upvotes: '831K',
            comments: '75K'
        },
        {
            id: 3,
            title: 'Calling all #ClimateChange activists! Tell the 🌍 about the change you want to see! #COP26 #OurPlanet #FightForOurWorld',
            platform: PlatformType.Tiktok,
            iframeUrl: 'https://www.tiktok.com/embed/7025299649821003013',
            uploaderImg: profilePicMargot,
            upvotes: '586K',
            comments: '52K'
        },
    ];
    return (
        <div className='popular-section-div'>
            {popularItems.map((item) => (
                <PopularItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default PopularSection;