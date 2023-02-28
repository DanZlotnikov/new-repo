import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Modal({renderComponent, onCancel}) {
  const currentUser = useSelector((state) => state.authReducer.currentUser);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleCancel = () => {
    setIsOpen(false);
    onCancel();
  }

  return (
    <div className={`modalContainer ${isOpen ? 'open' : ''}`}>
      <div className={`modalBody ${isOpen ? 'open' : ''}`}>
        <img className='userProfileImg' src={currentUser.profileImgPresignedUrlS3} alt={`${currentUser.firstName} ${currentUser.lastName}`}/>
        <button className="closeButton" onClick={handleCancel}>
          &times;
        </button>
        {renderComponent}
        </div>
    </div>  


  );
};

export default Modal;
