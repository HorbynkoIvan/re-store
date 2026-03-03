import BookstoreService from "../../services/bookstore-service.js";
import {setBooks, setLoading, setError} from "./booksSlice.js"

const bookListService = new BookstoreService()

export const fetchBooks = () => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const data = await bookListService.getBooks()
        console.log("data", data)
        dispatch(setBooks(data))
    } catch (error) {
        dispatch(setError(error))
    } finally {
        dispatch(setLoading(false))
    }
}