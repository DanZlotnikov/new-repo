import profilePicDan from '../../../New folder/profile_pic_dan.jpg';
import profilePicMargot from '../../../New folder/profile_pic_margot.jpg';
import profilePicMan from '../../../New folder/profile_pic_man.jpg';
import pdf1 from '../../../New folder/file1.pdf';
import pdf2 from '../../../New folder/file2.pdf';
import pdf3 from '../../../New folder/file3.pdf';
import FileItem from './FileItem';

function FileList() {
    let fileDataList =  [
        {
            id: 1,
            uploaderPicUrl: profilePicMan,
            title: 'Innovation and climate change: A review and introduction to the special issue',
            file: pdf1,
            author: 'Stelvia Matos, Eric Viardot, Benjamin K. Sovacool, Frank W.Geelsg, Yu Xiong',
            publishDate: 'October, 2021',
            upvotes: '3.8K',
            highlights: 165
        },
        {
            id: 2,
            uploaderPicUrl: profilePicMargot,
            title: 'Adapting to climate change and climate policy: progress, problems and potentials',
            file: pdf2,
            author: 'Daniel Scott, Susanne Becken',
            publishDate: 'April, 2009',
            upvotes: '1.8K',
            highlights: 94
        },
        {
            id: 3,
            uploaderPicUrl: profilePicDan,
            title: 'Climate Change Adaptation and Development: Exploring the Linkages',
            file: pdf3,
            author: 'E. Lisa, F. Schipper',
            publishDate: 'July, 2007',
            upvotes: 794,
            highlights: 200
        },
    ];
    return (
        <div className='file-list-div'>
            <div className='file-list-header'>
                <span class='uploader-img'>
                </span>
                <span className='file-list-cell header-name' >
                    Title
                </span>
                <span className='file-list-cell published-cell'>
                    Published
                </span>  
            </div>
            {fileDataList.map((fileData) => 
               <FileItem fileData={fileData} />
            )}
            
        </div>
    )
}

export default FileList;