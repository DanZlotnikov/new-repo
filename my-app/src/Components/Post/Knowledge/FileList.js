import FileItem from './FileItem';

function FileList({items}) {
    return (
        <div className='fileListDiv'>
            <div className='fileListHeader'>
                <span className='uploaderImg'>
                </span>
                <span className='fileListCell header-name' >
                    Title
                </span>
                <span className='fileListCell publishedCell'>
                    Published
                </span>  
            </div>
            {items.map((item) => 
               <FileItem key={item.id} item={item} />
            )}
            
        </div>
    )
}

export default FileList;