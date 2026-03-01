import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from './reducers/qoutesSlice'

export const store = configureStore({
    reducer: {
        quotes: quotesReducer,
    },
})