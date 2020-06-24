import React, {Component} from "react";
import {connect} from "react-redux";
import styled from "styled-components";

import {withBookstoreService} from "../hoc";
import {booksLoaded, booksRequested, booksError} from "../../actions";
import {compose} from "../../utils"
import BookListItem from "../book-list-item";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator";

const BookListStyled = styled.ul`
  list-style: none;
`

class BookList extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error} = this.props;
        if (loading) return <Spinner/>
        if (error) return <ErrorIndicator/>
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
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return {
        fetchBooks: () => {
            dispatch(booksRequested())
            bookstoreService.getBooks()
                .then((data) => dispatch(booksLoaded(data)))
                .catch((error) => dispatch(booksError(error)))
        }
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookList)
