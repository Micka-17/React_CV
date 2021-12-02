import { React, Component, useState, useCallback } from "react"
import { slide as Menu } from 'react-burger-menu'



export default function Top() {
    showSettings (e) 
        e.preventDefault();

      

    return (
        <section id="sec-1">
            <div>
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
            </div>
            <div class="marbre">
                <div class="container">
                    <h1>Mickaël Boï</h1>
                    <p>Mickael Dev Junior</p>
                    <a href="#sec-2" class="title-btn">En savoir plus</a>
                </div>
            </div>

        </section >
    )
}