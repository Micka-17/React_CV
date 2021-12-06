import { React, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import comp from '../components/CompetenceMap'

export default function Skills({page}) {
    console.log(page, comp);

    let array = comp;
    if(page === "home") {
        array= [
            array[0],array[1],array[2]
    ];
        console.log(array);
    }

    return (
        <section id="sec-2">
            <h1>Mes compétences</h1>
            <p>Au sein d'une formation Openclassrooms j'ai acqui divers compétences, des plus basqiues Html, Css, Javascript ju'qu'à du React, Axios, API et bien d'autres! </p>
            <div className="container flex-wrap" data-aos="zoom-in">
                {array.map(({icon, description, title}) => ( 
                
                    <div className="competences col-4">
                            <p className="i">{icon}</p>
                            <h2>{title}</h2>
                            <p>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}