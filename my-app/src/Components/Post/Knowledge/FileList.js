import texts from '../../../texts';
import KnowledgeItem from './KnowledgeItem';

function FileList({items}) {
    return (
        <div className='fileListDiv'>
            <div className='fileListHeader'>
                <span className='uploaderImg'>
                </span>
                <span className='fileListCell header-name' >
                    {texts.knowledge.itemListHeaderTitle}
                </span>
                <span className='fileListCell publishedCell'>
                    {texts.knowledge.itemListHeaderPublished}
                </span>  
            </div>
            {items.map((item) => 
                <KnowledgeItem key={item.id} item={item} />
            )}
        </div>
    )
}

export default FileList;