import './App.css';
import '../src/Style/style.css'

import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {AnimatePresence } from "framer-motion"

import Contact from './Pages/Contact';
import Home from './Pages/Home';
import SkillsPage from './Pages/SkillsPage';
import NotFound from './Pages/404';

export default function App() {

  return (
    <AnimatePresence exitBeforeEnter>
        <Router>
          <Routes>
            <Route path="React_CV/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />          
            <Route path="/skills" element={<SkillsPage />} />         
            <Route path="/*" element={<NotFound />} />  
          </Routes>       
        </Router>
      </AnimatePresence>
  );
}
