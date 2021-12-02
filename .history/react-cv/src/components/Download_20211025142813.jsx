import React from 'react'
import '../Style/style.css'
import 'font-awesome/css/font-awesome.min.css'
let FontAwesome = require('react-fontawesome');

export default function Download() {

    return (
        <section id="sec-3">
            <div class="container">
                <div class="left">
                    <FontAwesome
                        className="fas fa-code fa-5x"
                        name='code'
                        spin
                        size='5x'
                    />
                </div>
                <div class="right">
                    <h1>ghsgfrhshrs</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elitconsequatur, facere neque inventore saepe quidem id recusandae adipisci doloribus ipsum magni fugit dolorum quo!</p>
                    <br />
                    <p>Lorem ipsum dolor sit ameam in. Aliquid eos, exercitationem placeat dicta blanditiis magnam quia minima maiores aliquam? Fugiat beatae ratione ut!</p>
                    <a href=".src\dl\mickael_boi.pdf" class="dl-btn" download="mickael_boi">Download C.V</a>
                </div>
            </div>
        </section>
    )
}