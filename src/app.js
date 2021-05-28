import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from './components/users/user/user';

import Index from './components/Index';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/:users" component={User} />
            </Switch>
        </Router>
    )
}

render(<App />, document.getElementById('root'));
