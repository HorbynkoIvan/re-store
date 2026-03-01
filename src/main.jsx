import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux';
import {store} from '@redux/store';
import App from './App.jsx'
import ErrorBoundary from "./components/error-boundary";
import BookstoreService from "./services/bookstore-service";
import {BookstoreServiceProvider} from "./components/bookstore-service-context/index";
// import store from "./store.js"

const bookstoreService = new BookstoreService();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <BookstoreServiceProvider value={bookstoreService}>
                    <App/>
                </BookstoreServiceProvider>
            </ErrorBoundary>
        </Provider>
    </StrictMode>,
)

