import React, {Component} from "react";
import {connect} from "react-redux";
import styled from "styled-components";

import {withBookstoreService} from "../hoc";
import {booksLoaded} from "../../actions";
import {compose} from "../../utils"
import BookListItem from "../book-list-item";

const BookListStyled = styled.ul`
  list-style: none;
`

class BookList extends Component {
    componentDidMount() {
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        console.log(data)

        this.props.booksLoaded(data);
    }

    render() {
        const {books} = this.props;
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
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = {
    booksLoaded
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookList)
