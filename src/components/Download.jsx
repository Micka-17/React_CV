import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import PDF from "../dl/mickael_boi_junior.pdf"

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
                    <p>Après avoir été lassé de la vente, j'ai enfin pris la décision de partir dans un domaine pour moi, qui m'intéresse réellement.<br />
                        L'informatique en général m'a toujours attiré, ainsi après avoir découvert le développement web je me suis lancé via OpenClassRooms pour obtenir un Bac +2 fin 2021.<br />
                        Maintenant je suis en pleine lancée pour continuer à apprendre et progresser.<br />
                        Mon nouvel objectif est de réaliser un bac +3 en alternance pour obtenir et améliorer mes compétences dans ce domaine.
                        </p>
                        <br />
                    <a href={PDF} className="dl-btn" download="mickael_boi.pdf">Download C.V</a>
                </div>
            </div>
        </section>
    )
}