import React from 'react'
import Link from "react-dom"
import { FaBars } from 'react-icons/fa';

export function Navbar () {
    return (
        <div>
            <div className="navbar">
                <Link to="#" className="menuBars">
                    <FaBars />
                </Link>
            </div>
        </div>
    )
}