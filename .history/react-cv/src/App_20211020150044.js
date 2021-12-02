import './App.css';
import Top from './components/Top';
import Skills from './components/Skills';
import './Style/style.css'
import React from 'react'
import Footer from './components/Footer';
import Nav from './components/Nav';
import Download from './components/Download';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards';

function App() {
  return (
    <div className="App">
      <Router>
        <GuardProvider guards={[requireLogin]} error={Main} >
          <Switch>
            <GuardedRoute path="/main" component={Main} />
            <GuardedRoute path="/post" component={Post} />
            <GuardedRoute path="/account" component={Account} />
            <GuardedRoute path="/" component={NotFound} />
          </Switch>
        </GuardProvider>
      </Router>
      <Top />
      <Skills />
      <Download />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
