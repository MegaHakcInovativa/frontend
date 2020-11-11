import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login';
import LoginContinued from './pages/LoginContinued';
import TopBar from './pages/components/topBar/TopBar';
import QuestionOne from './pages/questions/QuestionsOne';
import QuestionTwo from './pages/questions/QuestionTwo';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/login' component={LoginContinued} />
                <Route path='/ola' component={TopBar} />
                <Route path='/first' component={QuestionOne} />
                <Route path='/second' component={QuestionTwo} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes