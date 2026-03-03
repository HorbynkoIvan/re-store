import {createSlice} from '@reduxjs/toolkit'
import BookstoreService from "../../services/bookstore-service.js";

const bookListService = new BookstoreService()

const initialState = {
    isLoading: false,
    error: null,
    books: [],
}

export const booksSlice = createSlice({
    name: 'bookList',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            // FETCH_BOOKS_REQUEST
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            // FETCH_BOOKS_FAILURE
            state.error = action.payload;
        },
        setBooks: (state, action) => {
            // FETCH_BOOKS_SUCCESS
            state.quotes = action.payload.quotes || [];
        }
    },
})

export const {
    setBooks,
    setLoading,
    setError
} = booksSlice.actions

export default booksSlice.reducer