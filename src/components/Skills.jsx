import { React } from 'react'

import comp from '../components/CompetenceMap'

export default function Skills({ sec2Ref, page }) {

    let array = comp;
    
    if(page === "home") {
        array= [
            array[0],array[1],array[2]
    ];
    }

    return (
        <section id="sec-2" ref={sec2Ref}>
            <h1>Mes compétences </h1>
            <p>
                Développeur web et mobile polyvalent, spécialisé dans les technologies Symfony, Sylius, PHP et Reactjs. Fort d'une reconversion réussie dans le domaine informatique, je suis passionné par la création d'applications performantes et intuitives. Depuis un an, je suis DevOps. En effet, je gére actuellement les serveurs et les déploiements pour l'entreprise dans laquelle je travaille. Déterminé à contribuer à des projets innovants, je suis enthousiaste à l'idée de relever de nouveaux défis dans un environnement dynamique.
            </p>
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
