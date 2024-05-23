import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/fontawesome-free'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div>
                    <a href="https://www.linkedin.com/in/mickaël-boïDevWeb" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="Social"
                        size='3x'
                    />
                    </a>
                    <a href="https://github.com/Micka-17" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="Social"
                        size='3x'
                    />
                    </a>
                </div>
            </div>
        </footer>
    )
}