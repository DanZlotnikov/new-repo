import FileList from './FileList';

function KnowledgeSection({postData}) {
    return (
        <div className='knowledgeSectionDiv'>
            <FileList items={postData.knowledgeItems}/>
        </div>
    )
}

export default KnowledgeSection;