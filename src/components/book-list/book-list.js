import React, {Component} from "react";
import {connect} from "react-redux";
import styled from "styled-components";

import {withBookstoreService} from "../hoc";
import {booksLoaded, booksRequested} from "../../actions";
import {compose} from "../../utils"
import BookListItem from "../book-list-item";
import Spinner from "../spinner/spinner";

const BookListStyled = styled.ul`
  list-style: none;
`

class BookList extends Component {
    componentDidMount() {
        const {bookstoreService, booksLoaded, booksRequested} = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const {books, loading} = this.props;
        if(loading) return <Spinner/>
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
        books: state.books,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    booksLoaded,
    booksRequested
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookList)
