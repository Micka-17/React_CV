import './App.css';
import '../src/Style/style.css'

import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { ChakraProvider } from "@chakra-ui/react"

import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { SkillsPage } from './Pages/SkillsPage';
import { NotFound } from './Pages/404';

export default function App() {
  const history = useHistory()

    useEffect(() => {
        let add = () => {
            console.log("work2");
            {/* <add className="d-none" /> */}
            let classSelected = document.querySelector(".ShowMySkill");
            classSelected.classList.toggle("d-none");
         }
        return history.listen((location) => {
            console.log(`You changed the page to: ${location.pathname}`)
            let url = location.pathname;
            console.log(url);
            if (url == "/home") {
                console.log("work");
                add();
            }
        })
    },[history])


  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} /> 
        <Route path="/about" component={About} />         
        <Route path="/skills" component={SkillsPage} />         
        <Route path="/" component={NotFound} />  
      </Switch>       
    </Router>
  );
}
