import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login';
import LoginContinued from './pages/LoginContinued';
import TopBar from './pages/components/topBar/TopBar';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/login' component={LoginContinued} />
                <Route path='/ola' component={TopBar} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes