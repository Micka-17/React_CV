import React from 'react'
import { Link, useLocation } from "react-router-dom"

import { Contact } from '../Pages/Contact';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { SkillsPage } from '../Pages/SkillsPage';



export default function Nav() {

    const params = useLocation();

    let target = () => {
        console.log('');
    let add = () => {
        console.log("work2");
        let classSelected = document.querySelector(".ShowMySkill");
        classSelected.classList.toggle("d-none");
    } 

    if (params == "/home" || params == "/home#sec-2") {
        console.log("work");
        add();
    }
}

console.log(params.pathname);
    
    return (
            <section className="sec-4">
                <div className="menu">
                    <div className="navigation">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/home" onclick={target}> Home </Link>
                                </li>
                                <li>
                                    <Link to="/contact" onclick={target}> Contact </Link>
                                </li>
                                <li>
                                    <Link to="/about" onclick={target}> About </Link>
                                </li>
                                <li>
                                    <Link to="/skills" onclick={target}> Skills </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
    )
}