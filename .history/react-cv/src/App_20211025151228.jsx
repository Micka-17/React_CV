import './App.css';
import './Style/style.css'

import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
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
                                <Route  path="/home"> 
                                    <Home/>
                                </Route>
                                <Route  path="/contact"> 
                                    <Contact />
                                </Route>
                                <Route  path="/about">
                                    <About />
                                </Route>
                                <Route  path="/skills"> 
                                    <SkillsPage />
                                </Route>
                            </Switch>
        </Router>
  );
}
