import PopularItem from './PopularItem';
import ErrorBoundary from '../../Common/ErrorBoundary';

function PopularSection({postData}) {
    return (
        <div className='popularSectionDiv'>
            {postData.popularItems.map((item) => (
                <ErrorBoundary key={item.id}>
                    <PopularItem item={item} />
                </ErrorBoundary>
            ))}
        </div>
    )
}

export default PopularSection;