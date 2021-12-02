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
        <Route path="/home" exact component={Home} />
        <Route path="/contact" exact component={Contact}>
          <Contact />
        </Route>
        <Route path="/about" exact component={About}>
          <About />
        </Route>
        <Route path="/skills" exact component={SkillsPage}>
          <SkillsPage />
        </Route>
        <Route path="/" exact component={NotFound}>
          <NotFound />
        </Route>
    </Router>
  );
}
