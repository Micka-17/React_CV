import React from 'react'
import { BrowserRouter as Router, Link, Switch, useHistory } from "react-router-dom"

import { Contact } from '../Pages/Contact';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { SkillsPage } from '../Pages/SkillsPage';

import '../Style/style.css'

export default function Nav() {

    const history = useHistory();

    function Move () {

    }

    return (
        <Router>
            <section class="sec-4">
                <div class="menu">
                    <div class="navigation">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/home" onClick=""> Home </Link>
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
                        </nav>
                    </div>
                </div>
            </section>
        </Router>
    )
}