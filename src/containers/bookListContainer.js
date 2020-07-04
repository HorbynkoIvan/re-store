import React, {Component} from "react";
import {connect} from "react-redux";

import {withBookstoreService} from "../components/hoc";
import {fetchBooks, bookAddedToCard} from "../actions";
import {compose} from "../utils"
import BookList from "../components/book-list";
import Spinner from "../components/spinner/spinner";
import ErrorIndicator from "../components/error-indicator";

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCard} = this.props;
        if (loading) return <Spinner/>
        if (error) return <ErrorIndicator/>
        return (
            <BookList books={books} onAddedToCard={onAddedToCard}/>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        books: state.bookList.books,
        loading: state.bookList.loading,
        error: state.bookList.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        onAddedToCard: (id)=>dispatch(bookAddedToCard(id))
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookListContainer)
