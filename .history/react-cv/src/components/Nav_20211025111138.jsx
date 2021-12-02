import React from 'react'
import { BrowserRouter as Router, Link, Switch } from "react-router-dom"

import {Contact} from '../Pages/Contact';
import {Home} from '../Pages/Home';
import {About} from '../Pages/About';
import {SkillsPage} from '../Pages/SkillsPage';

import '../Style/style.css'

export default function Nav() {

    return (
        <section class="sec-4">
            <div class="menu">
                <div class="navigation">
                    <Router>
                        
                            <ul>
                                <li><Link path="/main" component={Home} />Home</li>
                                <li><Link path="/post" component={Contact} />Contact</li>
                                <li><Link path="/account" component={About} />About</li>
                                <li><Link path="/SkillsPage" component={SkillsPage} />Skills</li>
                            </ul>
                    </Router>
                </div>
            </div>
        </section>
    )
}