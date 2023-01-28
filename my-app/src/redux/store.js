import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer'

export default configureStore({
    reducer: { 
        authReducer: authReducer 
    }
});