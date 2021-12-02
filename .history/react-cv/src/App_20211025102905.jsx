import './App.css';
import './Style/style.css'

import React from 'react'

import { BrowserRouter as Router, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards';

import { ChakraProvider } from "@chakra-ui/react"

import {Contact} from './Pages/Contact';
import {Home} from './Pages/Home';
import {About} from './Pages/About';
import {Skill} from './Pages/Skills';

export default function App() {
  
  return (
    <ChakraProvider>
        <Router>
        <GuardProvider guards={guards} loading={Loading} error={NotFound}>
            <Switch>
              <GuardedRoute path="/main" component={Home} />
              <GuardedRoute path="/contact" component={Contact} />
              <GuardedRoute path="/about" component={About} />
              <GuardedRoute path="/skill" component={Skill} />
            </Switch>
          </GuardProvider>
        </Router>
    </ChakraProvider>
  );
}
