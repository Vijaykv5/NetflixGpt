import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';
import moviesReducer from './moviesSlice'
import gptReducer from './gptSlice';
const store= configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
        }
    }
)

export default store;