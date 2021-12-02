import React from 'react'
import '../Style/style.css'
// import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

/* let FontAwesome = require('react-fontawesome'); fa-brands fa-js */ 

export default function Skills() {

    return (
        <section id="sec-2">
        <h1>Mes compétences</h1>
        <p>Au sein d'une formation Openclassrooms j'ai acqui divers compétences, des plus basqiues Html, Css, Javascript ju'qu'à du React, Axios, API et bien d'autres. </p>
        <div className="container" data-aos="zoom-in">
            <div className="competences">
            <FontAwesomeIcon icon="fa fa-js-square" />
                <h2>Javascript</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div>
            <div className="competences">
            <FontAwesomeIcon icon={solid('Walking')} className="i"
            size='5x'
            />
            
                <h2>React</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div><div className="competences">
            <FontAwesomeIcon
                className="fas fa-mobile fa-5x i"
                name='mobile-alt'
                size='5x'
            />
                <h2>Le Responsive</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div>
        </div>
    </section>
    )
}