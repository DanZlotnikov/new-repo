import texts from '../../../texts';
import FileItem from './FileItem';
import FileUpload from '../../Common/FileUpload';

function FileList({items}) {
    return (
        <>
            <FileUpload />
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
                <FileItem key={item.id} item={item} />
                )}
            </div>
        </>
    )
}

export default FileList;