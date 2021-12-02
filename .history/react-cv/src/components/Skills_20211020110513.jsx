import React from 'react'
import '../Style/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skills() {

    return (
        <section id="sec-2">
        <h1>Mes compétences acquises</h1>
        <p>Au sein d'une formation certifier d'Openclassrooms fgsdgj ieiprghj eqidghj idegjh qpdergjn opidgjn porgerg
             kZJNFKRGNKMERNG KEG G rg g e.</p>
        <div class="container" data-aos="zoom-in">
            <div class="competences">
                <FontAwesomeIcon icon={faCoffee} />
                <i class="fab fa-html5 fa-5x"></i>
                <h2>L'HTML</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div>
            <div class="competences">
                <i class="fab fa-css3 fa-5x"></i>
                <h2>Le CSS</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div><div class="competences">
                <i class="fas fa-mobile-alt fa-5x"></i>
                <h2>Le Responsive</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div>
        </div>
    </section>
    )
}