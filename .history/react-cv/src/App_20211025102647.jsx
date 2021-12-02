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

import Top from './components/Top';
import Skills from './components/Skills';

import Footer from './components/Footer';
import Nav from './components/Nav';
import Download from './components/Download';

export default function App() {
  
  return (
    <Top />,
        <Skills />,
        <Download />,
        <Nav />,
        <Footer />
  );
}
