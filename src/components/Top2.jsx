import React from 'react'
import { slide as Menu } from 'react-burger-menu'

export default function Top2() {

    let showSettings = (e) => {
        e.preventDefault();
    }

    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px'
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
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }

    return (
        <section id="sec-S">
            <div className="">
                <Menu styles={ styles }>
                    <a id="home" className="menu-item" href="/React_CV">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
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