import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { code } from '@fortawesome/fontawesome-free'
import PDF from "../dl/mickael_boi.pdf"
import JPEG from "../dl/diploma.jpeg"

export default function Download() {

    return (
        <section id="sec-3">
            <div className="container">
                <div className="left">
                    <FontAwesomeIcon icon={code}
                        size='5x'
                    />
                </div>
                <div className="right">
                    <h2 className="title">Ma vision du développement</h2>
                    <p>
                    En quête perpétuelle d'amélioration et de développement de nouvelles compétences, je nourris une passion pour la veille technologique et j'accorde une grande valeur aux retours d'expérience.
                    <br />J'ai également le souci d'observer et d'apprendre du fonctionnement d'autres entreprises, ce qui me permet de créer une dynamique collaborative axée sur la connaissance et les meilleures pratiques de développement.
                    <br />Mon objectif est d'apporter continuellement de la valeur à chaque projet que j'entreprends, en restant ouvert aux nouvelles idées et en cherchant à relever de nouveaux défis avec détermination et enthousiasme.
                    
                    </p>
                    <br />
                    <div className="d-flex justify-content-around flex-wrap">
                        <a href={PDF} className="dl-btn fisrtDl" download="mickael_boi.pdf">Download C.V</a>
                        <a href={JPEG} className="dl-btn" download="diploma.jpeg">Download Diploma</a>
                    </div>
                </div>
            </div>
        </section>
    )
}