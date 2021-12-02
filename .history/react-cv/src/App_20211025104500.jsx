import './App.css';
import './Style/style.css'

import React from 'react'

import { BrowserRouter as Router, Switch } from "react-router-dom"
import { GuardProvider, GuardedRoute } from 'react-router-guards';

import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Skill } from './Pages/Skills';
import { NotFound } from './Pages/NotFound';

export function App() {

  const requireLogin = (to, from, next) => {
    if (localStorage.getItem('token')) {
      next();
    } else {
      next.redirect('/error');
    }
  };

  return (
    < Home />
  );
}
