import { Colors } from '../../../consts';
import { FaBrain, FaPen } from 'react-icons/fa';

function FileItem({fileData}) {
    return (
        <div className='file-list-row'>                        
            <span className='uploader-img-span'>
                <img className='file-list-cell user-profile-img' src={fileData.uploaderPicUrl} />
            </span>
            <div className='file-list-cell' >
                <a href={fileData.file} className='file-title-link' rel="noopener noreferrer" target="_blank">
                    <div className='title-span ellipsis' >
                        {fileData.title}
                    </div>
                </a>
                <div className='author-span ellipsis'>
                    {fileData.author}
                </div>
            </div>
            <span className='file-list-cell published-cell'>
                <span className='published-span'>
                    {fileData.publishDate}
                </span>
            </span>  
            <span className='file-list-cell reactions-cell'>
                <span className='reactions-span'>
                    <span className='reaction-counters file-reactions'>
                        <span className='brains'>
                            <FaBrain className='counter-icon' color={Colors.brainPink} size={18}/>
                            <span className='counter-number'>
                                {fileData.upvotes}
                            </span>
                        </span>
                        <span className='highlights'>
                            <FaPen className='counter-icon marker-icon' color={Colors.markerOrange} size={16}/>
                            <span className='counter-number'>
                                {fileData.highlights}
                            </span>
                        </span>
                    </span>
                </span>
            </span>  
        </div>
    )
}

export default FileItem;