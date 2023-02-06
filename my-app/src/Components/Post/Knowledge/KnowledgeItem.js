import { FaBrain, FaPen } from 'react-icons/fa';
import dateFormat from 'dateformat';
import KnowledgeApi from '../../../api/KnowledgeApi';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function KnowledgeItem({item}) {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const [itemBrained, setItemBrained] = useState(item.brainsUserIds.includes(currentUser.id));
    let uploaderFullName = item.uploader.firstName + ' ' + item.uploader.lastName;

    const handleBrainClick = () => {
        if (itemBrained) {
            KnowledgeApi.RemoveBrainFromKnowledgeItem(item.postId, item.id, currentUser.id).then(success => {
                if (success) {
                    item.brainsUserIds = item.brainsUserIds.filter(x => x !== currentUser.id);
                    setItemBrained(false);
                }
            });
        }
        else {
            KnowledgeApi.AddBrainToKnowledgeItem(item.postId, item.id, currentUser.id).then(success => {
                if (success) {
                    item.brainsUserIds.push(currentUser.id);
                    setItemBrained(true);
                }
            });
        }
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
                    <span className='reactionCounters'>
                    <span className={'brains ' + (itemBrained ? 'brained' : '')} onClick={handleBrainClick}>
                            <FaBrain className='counterIcon brainsIcon' size={18} />
                            <span className='counter-number'>
                                {item.brainsUserIds.length}
                            </span>
                        </span>
                        <span className='highlights'>
                            <FaPen className='counterIcon markerIcon' size={16}/>
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

export default KnowledgeItem;