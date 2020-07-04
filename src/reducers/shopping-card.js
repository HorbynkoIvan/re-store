const updateCardItems = (cardItems, item, idx) => {

    //remove elements
    if (item.count === 0) {
        return [
            ...cardItems.slice(0, idx),
            ...cardItems.slice(idx + 1),
        ]
    }

    //add elements or update
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
    const book = state.bookList.books.find((item) => item.id === bookId);
    let bookInCardIndex = state.shippingCard.cardItems.findIndex((card) => card.id === bookId);
    const bookInCard = state.shippingCard.cardItems[bookInCardIndex]; //return already exist card

    const newItem = updateCardItem(book, bookInCard, quantity);
    return {
        orderTotal: 0,
        cardItems: updateCardItems(state.shippingCard.cardItems, newItem, bookInCardIndex)

    }
}

const updateShoppingCard = (state, action) => {
    if (state === undefined) {
        return {
            cardItems: [],
            orderTotal: 0
        }
    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CARD':
            return updateOrder(state, action.payload, 1)
        case 'BOOKS_COUNT_DECREASE_IN_CARD':
            return updateOrder(state, action.payload, -1)
        case 'BOOKS_REMOVE_FROM_CARD':
            const item = state.shippingCard.cardItems.find((card) => card.id === action.payload);
            return updateOrder(state, action.payload, -item.count);
        default:
            return state.shippingCard
    }
}

export default updateShoppingCard;