import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/Login';
import LoginContinued from './pages/login/LoginContinued';
import TopBar from './pages/components/topBar/TopBar';
import QuestionOne from './pages/questions/QuestionsOne';
import QuestionTwo from './pages/questions/QuestionTwo';
import QuestionThree from './pages/questions/QuestionThree';
import User from './pages/User';
import SideBar from './pages/components/sideBar/SideBar';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/login' component={LoginContinued} />
                <Route path='/first' component={QuestionOne} />
                <Route path='/second' component={QuestionTwo} />
                <Route path='/thirth' component={QuestionThree} />
                <Route path='/user' component={User} />
                
                {/* Rotas para teste */}
                <Route path='/ola' component={TopBar} /> {/* essa rota n aparecea não ser q digite o endereo dela */}
                <Route path='/ola2' exact component={SideBar} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes