import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Register from './screens/Register'
import Login from './screens/Login'
import Reminder from './components/Reminder'
import Home from './screens/Home'
import TodoList from './screens/TodoList'


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Reminder" component={Reminder}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Register" component={Register}/>
            <Route path="/TodoList" component={TodoList}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;