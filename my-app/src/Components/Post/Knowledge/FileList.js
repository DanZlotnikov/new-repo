import FileItem from './FileItem';

function FileList({items}) {
    return (
        <div className='file-list-div'>
            <div className='file-list-header'>
                <span className='uploader-img'>
                </span>
                <span className='file-list-cell header-name' >
                    Title
                </span>
                <span className='file-list-cell published-cell'>
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