import './App.css';
import '../src/Style/style.css'

import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { SkillsPage } from './Pages/SkillsPage';
import { NotFound } from './Pages/404';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" copom={Home} />
        <Route path="/contact" copom={Contact} /> 
        <Route path="/about" copom={About} />         
        <Route path="/skills" copom={SkillsPage} />         
        <Route path="/unknown" copom={NotFound} />  
      </Routes>       
    </Router>
  );
}
