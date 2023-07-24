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
            <p>Développeur web et mobile polyvalent avec une bonne expérience dans les technologies Symfony, Sylius, PHP, et Reactjs, et une reconversion professionnelle réussie du domaine informatique. Passionné par la conception et le développement d'applications performantes et intuitives, je suis déterminé à apporter mes compétences techniques avancées et ma créativité pour relever de nouveaux défis et contribuer à des projets innovants.</p>
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
