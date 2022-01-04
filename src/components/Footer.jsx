import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div>
                    <h1>Disponible pour tout renseignment suplementaires</h1>
                    <a href="https://www.linkedin.com/in/mickaël-boïDevWeb" target="_blank">
                    <FontAwesomeIcon icon={brands('LinkedIn')} className="Social"
                        size='5x'
                    />
                    </a>
                    <a href="https://github.com/Micka-17" target="_blank">
                    <FontAwesomeIcon icon={brands('GitHub')} className="Social"
                        size='5x'
                    />
                    </a>
                </div>
            </div>
        </footer>
    )
}