import FileList from './FileList';

function KnowledgeSection({data}) {
    return (
        <div className='knowledgeSectionDiv'>
            <FileList items={data}/>
        </div>
    )
}

export default KnowledgeSection;