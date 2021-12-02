import {React, useEffect} from 'react'
import { Link, useHistory } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

/* let FontAwesome = require('react-fontawesome'); fa-brands fa-js */ 

export default function Skills() {
    const history = useHistory()

    useEffect(() => {
        return history.listen((location) => {
            console.log(`You changed the page to: ${location.pathname}`)
            let url = location.pathname;
            console.log(url);
            if (url === "/home") {
                function(e) {
                    <add class "click-state" here>
                 }
            }
        })
    },[history])

    return (
        <section id="sec-2">
        <h1>Mes compétences</h1>
        <p>Au sein d'une formation Openclassrooms j'ai acqui divers compétences, des plus basqiues Html, Css, Javascript ju'qu'à du React, Axios, API et bien d'autres. </p>
        <div className="container flex-wrap" data-aos="zoom-in">
            <div className="competences col-4">
            <FontAwesomeIcon icon={brands('js-square')} className="i"
            size='5x'
            />
                <h2>Javascript</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div>
            <div className="competences col-4">
            <FontAwesomeIcon icon={brands('React')} className="i"
            size='5x'
            />
            
                <h2>React</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div>
            <div className="competences col-4">
            <FontAwesomeIcon icon={brands('Node')} className="i"
            size='5x'
            />
                <h2>NodeJs</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div>

            <div className="ShowMySkill d-flex flex-wrap d-none">
                <div className="competences col-4">
                <FontAwesomeIcon icon={brands('js-square')} className="i"
                size='5x'
                />
                    <h2>Javascript</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
                </div>
                <div className="competences col-4">
                <FontAwesomeIcon icon={brands('React')} className="i"
                size='5x'
                />
                
                    <h2>React</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
                </div>
                <div className="competences col-4">
                <FontAwesomeIcon icon={brands('Node')} className="i"
                size='5x'
                />
                    <h2>NodeJs</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
                </div>
                <div className="competences col-4">
                <FontAwesomeIcon icon={brands('js-square')} className="i"
                size='5x'
                />
                    <h2>Javascript</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
                </div>
                <div className="competences col-4">
                <FontAwesomeIcon icon={brands('React')} className="i"
                size='5x'
                />
                
                    <h2>React</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
                </div>
                <div className="competences col-4">
                <FontAwesomeIcon icon={brands('Node')} className="i"
                size='5x'
                />
                    <h2>NodeJs</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
                </div>
            </div>
        </div>
            <Link to="/skills"  className="title-btn btn btn-outline-primary d-flex justify-content-sm-center"> Skills </Link>
    </section>
    )
}