import { Colors } from '../../../consts';
import { FaBrain, FaPen } from 'react-icons/fa';
import dateFormat from 'dateformat';
import PostsApi from '../../../api/PostsApi';
import { useSelector } from 'react-redux';

function FileItem({item}) {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    let uploaderFullName = item.uploader.firstName + ' ' + item.uploader.lastName;

    const addBrainToKnowledgeItem = () => {
        PostsApi.addBrainToKnowledgeItem(item.id, currentUser.id)
    }
    return (
        <div className='fileListRow'>                        
            <span className='uploaderImgSpan'>
                <img className='fileListCell userProfileImg' src={item.uploader.profileImgUrl} title={uploaderFullName} alt={uploaderFullName}/>
            </span>
            <div className='fileListCell' >
                <a href={item.fileUrl} className='fileTitleLink' rel="noopener noreferrer" target="_blank">
                    <div className='titleSpan ellipsis' title={item.title}>
                        {item.title}
                    </div>
                </a>
                <div className='authorSpan ellipsis' title={item.originalAuthors}>
                    {item.originalAuthors}
                </div>
            </div>
            <span className='fileListCell publishedCell'>
                <span className='publishedSpan'>
                    {dateFormat(item.publishDate, 'mmmm, yyyy')}
                </span>
            </span>  
            <span className='fileListCell reactionsCell'>
                <span className='reactions-span'>
                    <span className='reactionCounters file-reactions'>
                        <span className='brains'>
                            <FaBrain className='counterIcon' color={Colors.brainPink} size={18} onClick={() => addBrainToKnowledgeItem()} />
                            <span className='counter-number'>
                                {item.brainsCount}
                            </span>
                        </span>
                        <span className='highlights'>
                            <FaPen className='counterIcon markerIcon' color={Colors.markerOrange} size={16}/>
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