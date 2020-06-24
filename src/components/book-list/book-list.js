import React from "react";
import styled from "styled-components";

import BookListItem from "../book-list-item";

const BookListStyled = styled.ul`
  list-style: none;
`

const BookList = ({books}) => {
    return (
        <BookListStyled>
            {books.map((book) => {
                return (
                    <li key={book.id}>
                        <BookListItem book={book}/>
                    </li>
                )
            })}
        </BookListStyled>
    )
}

export default (BookList);
