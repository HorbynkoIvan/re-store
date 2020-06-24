import React from "react";
import BookListContainer from "../../containers/bookListContainer";

import ShoppingCartTable from "../shopping-card-table";

const HomePage = () => {
    return (
        <div>
            <BookListContainer/>
            <ShoppingCartTable/>
        </div>
    )
}

export default HomePage;