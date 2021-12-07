import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link, useLocation } from "react-router-dom"

export default function Top() {

    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px',
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em',
            display: 'flex',
            flexDirection: 'column'
        },
        bmItem: {
            display: 'inline-block',
            margin: '10px'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    return (
        <section id="sec-1">
            <div className="liste_burger">
                <Menu styles={ styles }>
                    <Link id="home" className="menu-item" to="/React_CV">Home</Link>
                    <Link id="contact" className="menu-item" to="/contact">Contact</Link>
                    <Link id="skills" className="menu-item" to="/skills">Skills</Link>
                    <Link id="about" className="menu-item" to="/about">About</Link>
                </Menu>
            </div>
            <div className="marbre">
                <div className="container">
                    <h1>Mickaël Boï</h1>
                    <p>Dev Junior React.js / React Native</p>
                    <a href="#sec-2" className="title-btn">En savoir plus</a>
                </div>
            </div>
        </section >
    )
}