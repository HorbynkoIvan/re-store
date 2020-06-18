import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app/app';
import ErrorBoundary from "./components/error-boundary";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context/index";
import store from "./store.js"

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookstoreService}>
                <App/>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
