import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Navbar from './navbar';
import Orders from './orders';
function Routes() {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;