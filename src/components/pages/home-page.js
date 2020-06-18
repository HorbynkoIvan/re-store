import React from "react";
import BookList from "../book-list";

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: "Production-ready microservices",
            author: 'Susan J. Fowler'
        },
        {
            id: 2,
            title: "Release It!",
            author: 'Michael Nygard'
        }
    ]
    return (
        <div>
            <BookList books={books}/>
        </div>
    )
}

export default HomePage;