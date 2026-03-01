import {configureStore} from '@reduxjs/toolkit'
import booksReducer from './reducers/bookListSlice.js'
import shippingCardReducer from './reducers/shoppingCardSlice.js'

export const store = configureStore({
    reducer: {
        books: booksReducer,
        shippingCard: shippingCardReducer,
    },
})