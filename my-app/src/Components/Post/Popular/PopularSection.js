import PopularItem from './PopularItem';

function PopularSection({postData}) {
    return (
        <div className='popularSectionDiv'>
            {postData.popularItems.map((item) => (
                <PopularItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default PopularSection;