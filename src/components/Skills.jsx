import { React } from 'react'
import { Link } from "react-router-dom"

import comp from '../components/CompetenceMap'

export default function Skills({page}) {
    let framework = [];
    const langage = [];
    const skills = [];
    const divers = [];

    function scrollUp() {
        window.scrollTo(0, 0);
    }
    
    comp.forEach(element => {
        switch (element.type) {
            case "framework": 
                framework.push(element);
                break;
            case "langage": 
                langage.push(element);
                break;
            case "skills": 
                skills.push(element);
                break;
            default:
                divers.push(element);
                break;
        }
    });

    if(page === "home") {
        framework= [
            framework[0],framework[1],framework[2]
        ]
        return (
            <section id="sec-2">
                <h1>Mes compétences </h1>
                <p>Développeur web et mobile polyvalent avec une expérience dans les technologies Symfony, Sylius, PHP, et Reactjs, grâce a une reconversion professionnelle réussie du domaine informatique. Passionné par la conception et le développement d'applications performantes et intuitives, je suis déterminé à apporter mes compétences techniques avancées et ma créativité pour relever de nouveaux défis et contribuer à des projets innovants.</p>
                <div className="container flex-wrap" data-aos="zoom-in">
                    <div className='w-100 mt-5'>
                        <h2 className='text-center'>Framework</h2>
                        <div className="framework d-flex flex-wrap justify-content-around">
                            {framework.map(({icon, description, title}) => ( 
                                <div className="competences col-md-4 col-6">
                                        <p className="i">{icon}</p>
                                        <h5>{title}</h5>
                                        <p>{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <span className="sides mb-5 border-bottom w-100"></span>
                </div>
                <div className="d-flex justify-content-around flex-wrap">
                    <Link id="skills" onClick={scrollUp} className="skills-btn" to="/skills">En voir plus</Link>
                </div>
            </section>
        )
    } else {
        return (
            <section id="sec-2">
                <h1>Mes compétences </h1>
                <p>Développeur web et mobile polyvalent avec une expérience dans les technologies Symfony, Sylius, PHP, et Reactjs, grâce a une reconversion professionnelle réussie du domaine informatique. Passionné par la conception et le développement d'applications performantes et intuitives, je suis déterminé à apporter mes compétences techniques avancées et ma créativité pour relever de nouveaux défis et contribuer à des projets innovants.</p>
                <div className="container flex-wrap" data-aos="zoom-in">
                    <div className='w-100 mt-5'>
                        <h2 className='text-center'>Framework</h2>
                        <div className="framework d-flex flex-wrap justify-content-around">
                            {framework.map(({icon, description, title}) => ( 
                                <div className="competences col-md-4 col-6">
                                        <p className="i">{icon}</p>
                                        <h5>{title}</h5>
                                        <p>{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <span className="sides mb-5 border-bottom w-100"></span>
                    <div className='w-100 mt-5'>
                        <h2 className='text-center'>Langage</h2>
                        <div className="langage d-flex flex-wrap justify-content-around">
                            {langage.map(({icon, description, title}) => ( 
                                <div className="competences col-md-4 col-6">
                                        <p className="i">{icon}</p>
                                        <h5>{title}</h5>
                                        <p>{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <span className="sides mb-5 border-bottom w-100"></span>
                    <div className='w-100 mt-5'>
                        <h2 className='text-center'>Divers</h2>
                        <div className="divers d-flex flex-wrap justify-content-around">
                            {divers.map(({icon, description, title}) => ( 
                                <div className="competences col-md-4 col-6">
                                        <p className="i">{icon}</p>
                                        <h5>{title}</h5>
                                        <p>{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <span className="sides mb-5 border-bottom w-100"></span>
                    <div className='w-100 mt-5'>
                        <h2 className='text-center'>Skills</h2>
                        <div className="skills d-flex flex-wrap justify-content-around">
                            {skills.map(({icon, description, title}) => ( 
                                <div className="competences col-md-4 col-6">
                                        <p className="i">{icon}</p>
                                        <h5>{title}</h5>
                                        <p>{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                <span className="sides mb-5 border-bottom w-100"></span>
                </div>
            </section>
        )
    };
}
