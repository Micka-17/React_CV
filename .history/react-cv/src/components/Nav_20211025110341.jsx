import React from 'react'
import { BrowserRouter as Router, Link, Switch } from "react-router-dom"

import '../Style/style.css'

export default function Nav() {

    return (
        <section class="sec-4">
            <div class="menu">
            <div class ="navigation">
                <Router>
                <Switch>
                 
                <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="cv.html">C.V</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="info.html">About</a></li>
            </ul>
            </Router>
                <Switch />
                 
            </div>
            </div>
        </section>
    )
}