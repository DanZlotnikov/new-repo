import FileList from './FileList';

function KnowledgeSection({data}) {
    return (
        <div className='knowledge-section-div'>
            <FileList items={data}/>
        </div>
    )
}

export default KnowledgeSection;