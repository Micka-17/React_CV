import React from 'react'
import { Link } from "react-router-dom"

import { Contact } from '../Pages/Contact';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { SkillsPage } from '../Pages/SkillsPage';



export default function Nav() {

    return (
            <section className="sec-4">
                <div className="menu">
                    <div className="navigation">
                        <nav>
                            <ul>
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
                        </nav>
                    </div>
                </div>
            </section>
    )
}