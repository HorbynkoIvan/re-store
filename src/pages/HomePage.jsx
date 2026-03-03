import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BookListContainer} from "../containers/bookListContainer.jsx";
import {fetchBooks} from "../redux/reducers/booksThunks.js";

// import ShoppingCartTable from "../shopping-card-table";

const HomePage = () => {
    const {isLoading, books, error} = useSelector((state) => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks())
        console.log("books", books)
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div>
            <BookListContainer books={books}/>
            {/*<ShoppingCartTable/>*/}
        </div>
    )
}

export default HomePage;