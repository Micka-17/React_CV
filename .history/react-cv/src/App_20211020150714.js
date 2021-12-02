import './App.css';
import './Style/style.css'
import React from 'react'
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Contact from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <GuardProvider>
          <Switch>
            <GuardedRoute path="/main" component={Home} />
            <GuardedRoute path="/post" component={Contact} />
            <GuardedRoute path="/account" component={A} />
            <GuardedRoute path="/" component={NotFound} />
          </Switch>
        </GuardProvider>
      </Router>
    </div>
  );
}

export default App;
