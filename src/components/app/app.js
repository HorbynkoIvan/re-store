import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {HomePage, CardPage} from '../pages';
import ShopHeader from "../shop-header";

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={20} total={5}/>
            <Router>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/card" component={CardPage}/>
                </Switch>
            </Router>
        </main>
    );
}

export default App;
