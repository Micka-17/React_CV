import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const location = useLocation();

    return (
        <section className="sec-4">
            <div className="menu">
                <div className="navigation">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className={location.pathname === "/#/" ? "active" : ""}> Home </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={location.pathname === "/#/contact" ? "active" : ""}> Contact </Link>
                            </li>
                            <li>
                                <Link to="/skills" className={location.pathname === "/#/skills" ? "active" : ""}> Skills </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}
