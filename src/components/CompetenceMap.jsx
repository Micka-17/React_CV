import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


    const comp = [{
        icon: <FontAwesomeIcon icon={brands('React')} className="i"
        size='5x'
        />,
        title: "React",
        description: "Créeation du front d'un réseau social d'entreprise en React ainsi que le site si présent."
    }, {
        icon: <FontAwesomeIcon icon={brands('Node')} className="i"
        size='5x'
        />,
        title: "NodeJs",
        description: "Construisez une API sécurisée pour une application d'avis gastronomiques Node.Js, Express, MongoDB."
    }, {
        icon: <FontAwesomeIcon icon={solid('Database')} className="i"
        size='5x'
        />,
        title: "MySQL",
        description: "Gestion de bases de donées avec Mysql grace a Axios, Sequelize."
    }, {
        icon: <FontAwesomeIcon icon={brands('Html5')} className="i"
        size='5x'
        />,
        title: "Html 5",
        description: "Création/Gestion d'un squelette en HTML."
    }, {
        icon: <FontAwesomeIcon icon={brands('Css3')} className="i"
        size='5x'
        />,
        title: "CSS 3",
        description: "Mise en forme basqiue du Design."
    }, {
        icon: <FontAwesomeIcon icon={brands('js-square')} className="i"
        size='5x'
        />,
        title: "Javascript",
        description: "Réalisation d'une maquette d'un site e-commerce en HTML, CSS, Javascript Vanilla."
    }, {
        icon: <FontAwesomeIcon icon={solid('mobile-screen-button')} className="i"
        size='5x'
        />,
        title: "Mobile first",
        description: ""
    }, {
        icon: <FontAwesomeIcon icon={solid('universal-access')} className="i"
        size='5x'
        />,
        title: "SEO / Accessibility ",
        description: ""
    }, {
        icon: <FontAwesomeIcon icon={brands('Dev')} className="i"
        size='5x'
        />,
        title: "Bonne pratique",
        description: ""
    }
]


export default comp;