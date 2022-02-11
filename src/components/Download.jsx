import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import PDF from "../dl/mickael_boi_junior.pdf"
import PDFD from "../dl/dpl.jpeg"

export default function Download() {

    return (
        <section id="sec-3">
            <div className="container">
                <div className="left">
                    <FontAwesomeIcon icon={solid('code')}
                        size='5x'
                    />
                </div>
                <div className="right">
                    <h2 className="title">Reconversion professionnelle</h2>
                    <p>
                        Après avoir travaillé dans plusieurs domaines, j'ai pris la décision de me lancer dans l'informatique ce qui m'a toujours attiré.
                        J'ai découvert le développement web et je me suis lancé sur open classroom pour obtenir un bac+2.
                        Très motivé dans mon nouveau challenge pour réaliser un bac+3 en alternance pour améliorer mes compétences dans ce domaine. Ou Commencer dans un poste de Développeur Junior.<br />
                        Je reste a votre disposition pour toute information complémentaire.
                        Après la vente, j'ai enfin pris la décision de partir dans un domaine pour moi, qui m'intéresse réellement.<br />
                    </p>
                    <br />
                    <div className="d-flex justify-content-around flex-wrap">
                        <a href={PDF} className="dl-btn fisrtDl" download="mickael_boi.pdf">Download C.V</a>
                        <a href={PDFD} className="dl-btn" download="mickael_boi_diploma.jpeg">Download Diploma</a>
                    </div>
                </div>
            </div>
        </section>
    )
}