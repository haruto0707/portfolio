import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/blog'

export const store = configureStore({
    reducer: {
        post: postReducer,
    },
});