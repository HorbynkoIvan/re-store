import React, {Component} from "react";
import {connect} from "react-redux";

import {withBookstoreService} from "../components/hoc";
import {fetchBooks} from "../actions";
import {compose} from "../utils"
import BookList from "../components/book-list";
import Spinner from "../components/spinner/spinner";
import ErrorIndicator from "../components/error-indicator";

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error} = this.props;
        if (loading) return <Spinner/>
        if (error) return <ErrorIndicator/>
        return (
            <BookList books={books}/>
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
        fetchBooks: fetchBooks(dispatch, bookstoreService)
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookListContainer)
