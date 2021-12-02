import './App.css';
import './Style/style.css'
import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import {Contact} from './Pages/About';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Skills} from './Pages/Skills';

export default function App() {
  return (
    <div className="App">
      <Router>
        <GuardProvider>
          <Switch>
            <GuardedRoute path="/main" component={Home} />
            <GuardedRoute path="/post" component={Contact} />
            <GuardedRoute path="/account" component={A} />
            <GuardedRoute path="/" component={Skills} />
          </Switch>
        </GuardProvider>
      </Router>
    </div>
  );
}
