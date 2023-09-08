import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';
import moviesReducer from './moviesSlice'
import gptReducer from './gptSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
//Redux Persistant 

const persistConfig={
    key:"root",
    version:1,
    storage,
}
const reducer =combineReducers({
    user:userReducer,
    movies:moviesReducer,
    gpt:gptReducer,
    
})

const persistedReducer=persistReducer(persistConfig,reducer);
const store= configureStore(
    {
        reducer:persistedReducer,
    }
);


export default store;