import './App.css';
import './Style/style.css'
import React from 'react'
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards';

function App() {
  return (
    <div className="App">
      <Router>
        <GuardProvider>
          <Switch>
            <GuardedRoute path="/main" component={Home} />
            <GuardedRoute path="/post" component={Contact} />
            <GuardedRoute path="/account" component={Account} />
            <GuardedRoute path="/" component={NotFound} />
          </Switch>
        </GuardProvider>
      </Router>
    </div>
  );
}

export default App;
