import { Colors } from '../../../consts';
import { FaBrain, FaPen } from 'react-icons/fa';
import dateFormat from 'dateformat';

function FileItem({item}) {
    return (
        <div className='file-list-row'>                        
            <span className='uploader-img-span'>
                <img className='file-list-cell user-profile-img' src={item.uploader.profileImgUrl} />
            </span>
            <div className='file-list-cell' >
                <a href={item.fileUrl} className='file-title-link' rel="noopener noreferrer" target="_blank">
                    <div className='title-span ellipsis' title={item.title}>
                        {item.title}
                    </div>
                </a>
                <div className='author-span ellipsis' title={item.originalAuthors}>
                    {item.originalAuthors}
                </div>
            </div>
            <span className='file-list-cell published-cell'>
                <span className='published-span'>
                    {dateFormat(item.publishDate, 'mmmm, yyyy')}
                </span>
            </span>  
            <span className='file-list-cell reactions-cell'>
                <span className='reactions-span'>
                    <span className='reaction-counters file-reactions'>
                        <span className='brains'>
                            <FaBrain className='counter-icon' color={Colors.brainPink} size={18}/>
                            <span className='counter-number'>
                                {item.brainsCount}
                            </span>
                        </span>
                        <span className='highlights'>
                            <FaPen className='counter-icon marker-icon' color={Colors.markerOrange} size={16}/>
                            <span className='counter-number'>
                                {item.highlightsCount}
                            </span>
                        </span>
                    </span>
                </span>
            </span>  
        </div>
    )
}

export default FileItem;