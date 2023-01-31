import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    vresion: 1,
    storage
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export default configureStore({
    reducer: { 
        authReducer: persistedReducer    
    }
});