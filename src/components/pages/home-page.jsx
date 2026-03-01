import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BookListContainer} from "../../containers/bookListContainer.jsx";

// import ShoppingCartTable from "../shopping-card-table";

const HomePage = () => {
    const {isLoading, books, error} = useSelector((state) => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("books", books)
    }, []);

    return (
        <div>
            <BookListContainer/>
            {/*<ShoppingCartTable/>*/}
        </div>
    )
}

export default HomePage;