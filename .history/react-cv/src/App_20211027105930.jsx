import './App.css';
import './Style/style.css'

import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
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
        <Route path="/home" exact >
          <Home />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/skills" exact>
          <SkillsPage />
        </Route>
        <Route path="/" exact>
          <NotFound />
        </Route>
    </Router>
  );
}
