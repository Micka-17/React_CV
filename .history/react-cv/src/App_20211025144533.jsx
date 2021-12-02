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
              <Link to="/home" component={Home} />
              <Link to="/contact" component={Contact} />
              <Link to="/about" component={About} />
              <Link to="/skills" component={SkillsPage} />
            </Switch>
        </Router>
  );
}
