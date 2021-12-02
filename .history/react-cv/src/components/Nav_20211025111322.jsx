import React from 'react'
import { BrowserRouter as Router, Link, Switch } from "react-router-dom"

import { Contact } from '../Pages/Contact';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { SkillsPage } from '../Pages/SkillsPage';

import '../Style/style.css'

export default function Nav() {

    return (
        <Router>
            <section class="sec-4">
                <div class="menu">
                    <div class="navigation">

                        <ul>
                            <li><Link to="/main" />Home</li>
                            <li><Link to="/post" />Contact</li>
                            <li><Link to="/account" />About</li>
                            <li><Link to="/SkillsPage" />Skills</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Router>
    )
}