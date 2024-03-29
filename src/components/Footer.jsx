import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div>
                    <a href="https://www.linkedin.com/in/mickaël-boïDevWeb" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={brands('LinkedIn')} className="Social"
                        size='3x'
                    />
                    </a>
                    <a href="https://github.com/Micka-17" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={brands('GitHub')} className="Social"
                        size='3x'
                    />
                    </a>
                </div>
            </div>
        </footer>
    )
}