import { React } from 'react'

import comp from '../components/CompetenceMap'

export default function Skills({page}) {

    let array = comp;
    
    if(page === "home") {
        array= [
            array[0],array[1],array[2]
    ];
    }

    return (
        <section id="sec-2">
            <h1>Mes compétences </h1>
            <p>Au sein d'une formation Openclassrooms J'ai acquis de nombreuses connaissances et compétences, des plus basiques Html, Css, Javascript jusqu'au React, Axios, API et bien d'autres! </p>
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
