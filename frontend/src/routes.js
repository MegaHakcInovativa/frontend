import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login';
import LoginContinued from './pages/LoginContinued';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/login' component={LoginContinued} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes