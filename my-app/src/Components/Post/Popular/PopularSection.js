import PopularItem from './PopularItem';

function PopularSection({data}) {
    return (
        <div className='popularSectionDiv'>
            {data.map((item) => (
                <PopularItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default PopularSection;