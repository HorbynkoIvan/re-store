const initialState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [],
    orderTotal: 300
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false
            }
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'BOOK_ADDED_TO_CARD':
            const bookId = action.payload;
            const book = state.books.find((item) => item.id === bookId)
            const newItem = {
                id: book.id,
                name: book.title,
                count: 5,
                total: book.price
            }
            return {
                ...state,
                cardItems: [...state.cardItems, newItem]
            }

        default:
            return state;
    }

}

export default reducer;