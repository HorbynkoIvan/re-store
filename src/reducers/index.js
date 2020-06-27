const updateCardItems = (cardItems, item, idx) => {
    if (idx === -1) {
        return [...cardItems, item]
    } else {
        return [
            ...cardItems.slice(0, idx),
            item,
            ...cardItems.slice(idx + 1),
        ]
    }
}

const updateCardItem = (book, item = {}) => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = item;
    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    }
}

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
            const book = state.books.find((item) => item.id === bookId);
            const itemIndex = state.cardItems.findIndex((card) => card.id === bookId);
            const item = state.cardItems[itemIndex]; //return already exist card

            const newItem = updateCardItem(book, item);

            return {
                ...state,
                cardItems: updateCardItems(state.cardItems, newItem, itemIndex)
            }

        default:
            return state;
    }

}

export default reducer;