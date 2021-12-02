import React from 'react'
import { BrowserRouter as Router, Link, Switch, useHistory } from "react-router-dom"

import { Contact } from '../Pages/Contact';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { SkillsPage } from '../Pages/SkillsPage';

import '../Style/style.css'

export default function Nav() {

    const history = useHistory();

    const Move = async function (e) {
        e.preventDefault()
        window.lo
    }

    return (
        <Router>
            <section class="sec-4">
                <div class="menu">
                    <div class="navigation">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/home" onClick={Move} > Home </Link>
                                </li>
                                <li>
                                    <Link to="/contact" onClick={Move} > Contact </Link>
                                </li>
                                <li>
                                    <Link to="/about" onClick={Move} > About </Link>
                                </li>
                                <li>
                                    <Link to="/skills" onClick={Move} > Skills </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </Router>
    )
}