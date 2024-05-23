import React from 'react'

export default function Top({ scrollToSection }) {

    return (
        <section id="sec-1">
            <div className="marbre">
                <div className="container">
                    <h1>Mickaël Boï</h1>
                    <p>DevOps <br/> Debian / Docker / Symfony / React etc..</p>
                    <button className="title-btn" onClick={scrollToSection}>En savoir plus</button>
                </div>
            </div>
        </section >
    )
}