// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {HomePage, CardPage} from './components/pages';
// import ShopHeader from "./components/shop-header";

function App() {
    return (
        <main role="main" className="container">
            <HomePage/>
            {/*<Router>*/}
            {/*    /!*<ShopHeader numItems={20} total={5}/>*!/*/}
            {/*    <Switch>*/}
            {/*        <Route path="/" component={HomePage} exact/>*/}
            {/*        <Route path="/card" component={CardPage}/>*/}
            {/*    </Switch>*/}
            {/*</Router>*/}
        </main>
    )
}

export default App
