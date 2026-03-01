import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cardItems: [],
    orderTotal: 0
}

export const shoppingCardSlice = createSlice({
    name: 'shoppingCard',
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
    setLoading,
    setBooks,
    setError
} = shoppingCardSlice.actions

export default shoppingCardSlice.reducer