import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {HomePage, CardPage} from '../pages'

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/card" component={CardPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
