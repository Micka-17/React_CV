import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom"

import { Contact } from '../Pages/Contact';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { SkillsPage } from '../Pages/SkillsPage';

import '../Style/style.css'

export default function Nav() {

    const history = useHistory();

    const MoveIt = ({ history }) => {

        history.listen(() => {
            window.location.reload();
            console.log(action, location.pathname, location.state)
        })
    }

    return (
        <Router>
            <section class="sec-4">
                <div class="menu">
                    <div class="navigation">
                        <nav>
                            <ul onClick={MoveIt}>
                                <li>
                                    <Link to="/home"> Home </Link>
                                </li>
                                <li>
                                    <Link to="/contact"> Contact </Link>
                                </li>
                                <li>
                                    <Link to="/about"> About </Link>
                                </li>
                                <li>
                                    <Link to="/skills"> Skills </Link>
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