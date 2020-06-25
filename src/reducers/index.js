const initialState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [
        {
            id: 1,
            name: "First",
            count: 10,
            total: 100
        },
        {
            id: 1,
            name: "Second",
            count: 5,
            total: 200
        }
    ],
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
        default:
            return state;
    }

}

export default reducer;