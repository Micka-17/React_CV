import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Download() {

    return (
        <section id="sec-3">
            <div className="container">
                <div className="left">
                    <FontAwesomeIcon icon={Sslide('code')} 
                    className="i"
                    spin
                    size='5x'
                    />
                </div>
                <div className="right">
                    <h2 className="title">Reconversion professionnel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elitconsequatur, facere neque inventore saepe quidem id recusandae adipisci doloribus ipsum magni fugit dolorum quo!</p>
                    <br />
                    <p>Lorem ipsum dolor sit ameam in. Aliquid eos, exercitationem placeat dicta blanditiis magnam quia minima maiores aliquam? Fugiat beatae ratione ut!</p>
                    <a href="./dl/mickael_boi.pdf" className="dl-btn" download>Download C.V</a>
                </div>
            </div>
        </section>
    )
}