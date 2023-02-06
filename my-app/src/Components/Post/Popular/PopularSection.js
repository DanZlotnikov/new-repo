import PopularItem from './PopularItem';
import ErrorBoundary from '../../Common/ErrorBoundary';
import texts from '../../../texts';
import { useState } from 'react';
import Modal from '../../Common/Modal';
import UploadPopularItemForm from './UploadPopularItemForm';
import PopularApi from '../../../api/PopularApi';
import { useSelector } from 'react-redux';

function PopularSection({post}) {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const [showModal, setShowModal] = useState(false);
    const [createdItems, setCreatedItems] = useState(0);

    const handleUploadItem = (url, platformType) => {
        PopularApi.UploadPopularItem(post.id, currentUser.id, url, platformType).then(newItem => {
            if (newItem.id) {
                post.popularItems.push(newItem);
                setCreatedItems(createdItems + 1);
            }
        });
        setShowModal(false);
    }

    return (
        <div className='popularSectionDiv'>
            <div className='fileUploadDiv'>
                <span className='uploadBtn' onClick={() => setShowModal(true)}>
                    {texts.popular.addItem}
                </span>
            </div>
            {showModal && 
                <Modal renderComponent={<UploadPopularItemForm handleUploadItem={handleUploadItem} />} onCancel={() => setShowModal(false)} />
            }
            <div className='allItemsDiv'>
                {post.popularItems.map((item) => (
                    <ErrorBoundary key={item.id}>
                        <PopularItem item={item} />
                    </ErrorBoundary>
                ))}
            </div>
        </div>
    )
}

export default PopularSection;