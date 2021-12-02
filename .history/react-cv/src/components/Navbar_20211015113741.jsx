import React from 'react'
import link from "react-routeur-dom"
import { FaBars } from 'react-icons/fa';

export function Navbar () {
    return (
        <div>
            <div className="navbar">
                <Link to="#" className="menuBars">
                    <FaBars />
                </link>
            </div>
        </div>
    )
}