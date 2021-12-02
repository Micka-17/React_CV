import './App.css';
import './Style/style.css'

import React from 'react'

import { BrowserRouter as Router, Link, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards';

import { ChakraProvider } from "@chakra-ui/react"

import {Contact} from './Pages/Contact';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {SkillsPage} from './Pages/SkillsPage';

export default function App() {
  
  return (
        <Router>
            <Switch>
              <Link path="/home" component={Home} />
              <Link path="/contact" component={Contact} />
              <Link path="/about" component={About} />
              <Link path="/skills" component={SkillsPage} />
            </Switch>
        </Router>
  );
}
