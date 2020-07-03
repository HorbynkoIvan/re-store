const updateCardItems = (cardItems, item, idx) => {
    if(item.count === 0){
        return [
            ...cardItems.slice(0, idx),
            ...cardItems.slice(idx + 1),
        ]
    }

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

const updateCardItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = item;
    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
}

const updateOrder = (state, bookId, quantity) => {
    const book = state.books.find((item) => item.id === bookId);
    let bookInCardIndex = state.cardItems.findIndex((card) => card.id === bookId);
    const bookInCard = state.cardItems[bookInCardIndex]; //return already exist card

    const newItem = updateCardItem(book, bookInCard, quantity);
    return {
        ...state,
        cardItems: updateCardItems(state.cardItems, newItem, bookInCardIndex)

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
            return updateOrder(state, action.payload, 1)
        case 'BOOKS_COUNT_DECREASE_IN_CARD':
            return updateOrder(state, action.payload, -1)
        case 'BOOKS_REMOVE_FROM_CARD':
            return {...state}
        default:
            return state;
    }

}

export default reducer;