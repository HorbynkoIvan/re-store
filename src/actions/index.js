const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksError = (error) => {
    return {
        type: "FETCH_BOOKS_FAILURE",
        payload: error
    }
}

const bookAddedToCard = (bookId) => {
    return {
        type: "BOOK_ADDED_TO_CARD",
        payload: bookId
    }
}

const booksCountIncrease = (bookId) => {
    return {
        type: "BOOKS_COUNT_INCREASE_IN_CARD",
        payload: bookId
    }
}

const booksCountDecrease = (bookId) => {
    return {
        type: "BOOKS_COUNT_DECREASE_IN_CARD",
        payload: bookId
    }
}

const booksRemove = (bookId) => {
    return {
        type: "BOOKS_REMOVE_IN_CARD",
        payload: bookId
    }
}

const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)))
}

export {fetchBooks, bookAddedToCard, booksCountIncrease, booksCountDecrease, booksRemove};