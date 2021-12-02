import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom"

import { Contact } from '../Pages/Contact';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { SkillsPage } from '../Pages/SkillsPage';

import '../Style/style.css'

export default function Nav() {

    const history = useHistory();

    return (
        <Router>
            <section class="sec-4">
                <div class="menu">
                    <div class="navigation">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/home"> Home />
                                </li>
                                <li>
                                    <Link to="/contact"> Contact />
                                </li>
                                <li>
                                    <Link to="/about"> About />
                                </li>
                                <li>
                                    <Link to="/skills"> Skills />
                                </li>
                            </ul>
                            {/* <Switch>
                                <Route path="/home">
                                    <Home />
                                </Route>
                                <Route path="/contact">
                                    <Contact />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/skills">
                                    <SkillsPage />
                                </Route>
                            </Switch> */}
                        </nav>
                    </div>
                </div>
            </section>
        </Router>
    )
}