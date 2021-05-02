import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import Login from './pages/Login';
import Central from './pages/Central';
import EventDetails from './pages/EventDetails';


const Rotas = () => (
  <Switch>
    <Route exact path="/" component={SignUpForm} />
    <Route  path="/login" component={Login} />
    <Route  path="/central/:id" component={EventDetails} />
    <Route  path="/central" component={Central} />
  </Switch>
);

export default Rotas;

