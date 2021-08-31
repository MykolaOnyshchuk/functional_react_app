import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import Weather from './pages/Weather';

function Router() {
    return (
        <Switch>
            <Route exact path='/login' component={SignInPage}></Route>
            <Route exact path='/' component={LandingPage}></Route>
            <Route exact path='/weather' component={Weather}></Route>
        </Switch>
    );
}

export default Router;