import './App.css';
import './Style/style.css'

import { React } from 'react'

import { BrowserRouter as Router, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards';

import {Contact} from './Pages/Contact';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Skill} from './Pages/Skills';

export default function App() {
  
  return (
    <div></div>
    <div className="App">
      <Router>
        <GuardProvider>
          <Switch>
            <GuardedRoute path="/main" component={Home} />
            <GuardedRoute path="/post" component={Contact} />
            <GuardedRoute path="/account" component={About} />
            <GuardedRoute path="/" component={Skill} />
          </Switch>
        </GuardProvider>
      </Router>
    </div>
  );
}
