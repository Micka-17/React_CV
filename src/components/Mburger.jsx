import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link, useLocation } from "react-router-dom"

export default function Mburger() {
    const location = useLocation();

    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px',
        },
        bmBurgerBars: {
            background: '#206A93'
        },
        bmBurgerBarsHover: {
            background: '#008DD1'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#ee97b2'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',
            maxHeight: "250px",
            maxWidth: "220px"
        },
        bmMenu: {
            background: '#164966',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#FFFFFF',
            padding: '0.8em',
            display: 'flex',
            flexDirection: 'column'
        },
        bmItem: {
            color: '#FFFFFF',
            display: 'inline-block',
            margin: '10px',
            textDecoration: "none",
            cursor: "pointer",
            fontWeight: "bold"
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    function scrollUp() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="liste_burger">
            <Menu styles={styles} >
                <Link id="home" onClick={scrollUp} className={location.pathname === "/" ? "menu-item active" : "menu-item"} to="/">Home</Link>
                <Link id="contact" onClick={scrollUp} className={location.pathname === "/contact" ? "menu-item active" : "menu-item"} to="/contact">Contact</Link>
                <Link id="skills" onClick={scrollUp} className={location.pathname === "/skills" ? "menu-item active" : "menu-item"} to="/skills">Skills</Link>
            </Menu>
        </div>
            
    )
}