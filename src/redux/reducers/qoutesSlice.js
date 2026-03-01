import {createSlice} from '@reduxjs/toolkit'
import {colors, getContrastText, getRandomIndex, tumblrQuote, tweetQuote} from "@helpers/helpers";

const initialState = {
    isLoading: false,
    error: null,
    quotes: [],
    currentQuote: {
        quote: '',
        author: ''
    },
    color: colors[0],
    textColor: '#333',
}

export const quotesSlice = createSlice({
    name: 'quotes',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setQuotes: (state, action) => {
            state.quotes = action.payload.quotes || [];
        },
        setRandomQuote: (state) => {
            if (state.quotes.length > 0) {
                const randomIndex = getRandomIndex(state.quotes);
                state.currentQuote = state.quotes[randomIndex];
            } else {
                state.currentQuote = {quote: 'No quotes available', author: ''};
            }
        },
        setRandomColor: (state) => {
            const randomIndex = getRandomIndex(colors);
            state.color = colors[randomIndex];
            state.textColor = getContrastText(colors[randomIndex])
        },
        tweetQuoteAction: (state) => {
            tweetQuote(state.currentQuote.quote, state.currentQuote.author);
        },
        tumblrQuoteAction: (state) => {
            tumblrQuote(state.currentQuote.quote, state.currentQuote.author);
        },
    },
})

export const {
    setQuotes,
    setRandomQuote,
    setRandomColor,
    tweetQuoteAction,
    tumblrQuoteAction,
    setLoading,
    setError
} = quotesSlice.actions

export default quotesSlice.reducer