import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

function NewPost() {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    

    return (
        <div className='newPostDiv'>
          
        </div>
    )
}

export default NewPost;