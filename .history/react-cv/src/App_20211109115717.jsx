import './App.css';
import '../src/Style/st'

import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards';

import { ChakraProvider } from "@chakra-ui/react"

import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { SkillsPage } from './Pages/SkillsPage';
import { NotFound } from './Pages/404';

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} /> 
        <Route path="/about" component={About} />         
        <Route path="/skills" component={SkillsPage} />         
        <Route path="/" component={NotFound} />  
      </Switch>       
    </Router>
  );
}
