import './App.css';
import './Style/style.css'
import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Contact from './Pages/About';
import Home from './Pages/Home';
import About from './Pages/About';
import Skill from './Pages/Skills';
import Top from './components/'

function App() {
  return (
    <div className="App">
      <Top />,
      <Skills />,
      <Download />,
      <Nav />,
      <Footer />
    </div>
  );
}

export default App;
