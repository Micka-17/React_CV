import { React, Component, useState, useCallback } from "react";
import { HamburgerArrow } from 'react-animated-burgers'


export default function Top() {
    const [isActive, setIsActive] = useState(false)

    const toggleButton = useCallback(
        () => setIsActive(prevState => !prevState),
        [],
    )

    return (
        <section id="sec-1">
            <div>
                <HamburgerArrow
                    buttonColor="#FFBC67"
                    barColor="white"
                    className="btnBurger"
                    {...{ isActive, toggleButton }}
                    <h1>Mickaël Boï</h1>
                    <p>Mickael Dev Junior</p>
                />
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