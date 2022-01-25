import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


const comp = [{
    icon: <FontAwesomeIcon icon={brands('React')} className="i"
        size='5x'
    />,
    title: "React",
    description: "Création du front d'un réseau social d'entreprise en React."
}, {
    icon: <FontAwesomeIcon icon={brands('Node')} className="i"
        size='5x'
    />,
    title: "NodeJs",
    description: "Construisez une API sécurisée pour une application d'avis gastronomiques Node.Js, Express, MongoDB."
}, {
    icon: <FontAwesomeIcon icon={solid('Code')} className="i"
        size='5x'
    />,
    title: "Ajax",
    description: "AJAX (Asynchronous JavaScript + XML)."
}, {
    icon: <FontAwesomeIcon icon={brands('Php')} className="i"
        size='5x'
    />,
    title: "PHP",
    description: "Basique du langague PHP."
}, {
    icon: <FontAwesomeIcon icon={brands('Symfony')} className="i"
        size='5x'
    />,
    title: "Symfony",
    description: "Découverte du Framework Symfony."
}, {
    icon: <FontAwesomeIcon icon={solid('Database')} className="i"
        size='5x'
    />,
    title: "MySQL",
    description: "Gestion de bases de données avec Mysql grâce a Axios, Sequelize."
}, {
    icon: <FontAwesomeIcon icon={brands('Html5')} className="i"
        size='5x'
    />,
    title: "HTML 5",
    description: "Création/Gestion d'un squelette en HTML."
}, {
    icon: <FontAwesomeIcon icon={brands('Css3')} className="i"
        size='5x'
    />,
    title: "CSS 3",
    description: "Mise en forme basique du Design."
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
    title: "Bonnes pratiques",
    description: ""
}
]


export default comp;