import {React} from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar () {
    return (
        <div>
            <div className="navbar">
                <Link to="#" className="menuBars">
                    <FontAwesomeIcon icon={["far", "coffee"]} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar;