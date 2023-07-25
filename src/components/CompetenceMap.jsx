import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


const comp = [
    {
        icon: <FontAwesomeIcon icon={brands('Symfony')} className="i"
            size='5x'
        />,
        title: "Symfony",
        description: "Développeur Symfony chez Florajet.",
        type: 'framework'
    }, {
        icon: <FontAwesomeIcon icon={brands('React')} className="i"
            size='5x'
        />,
        title: "React",
        description: "Création de plusieurs projets en Reactjs.",
        type: 'framework'
    }, {
        icon: <FontAwesomeIcon icon={solid('Shop')} className="i"
            size='5x'
        />,
        title: "Sylius",
        description: "Utilisation sur plusieurs projets de Sylius 1.12",
        type: 'cms'
    }, {
        icon: <FontAwesomeIcon icon={brands('PHP')} className="i"
            size='5x'
        />,
        title: "PHP",
        description: "Développement PHP",
        type: 'langage'
    }, {
        icon: <FontAwesomeIcon icon={brands('js-square')} className="i"
            size='5x'
        />,
        title: "Javascript",
        description: "Réalisation de maquette dynamique de site e-commerce en HTML, CSS, Javascript Vanilla.",
        type: 'langage'
    }, {
        icon: <FontAwesomeIcon icon={brands('bootstrap')} className="i"
            size='5x'
        />,
        title: "Bootstrap",
        description: "Mise en page d'un style",
        type: 'framework'
    }, {
        icon: <FontAwesomeIcon icon={brands('Node')} className="i"
            size='5x'
        />,
        title: "NodeJs",
        description: "Construisez une API sécurisée pour une application d'avis gastronomiques Node.Js, Express, MongoDB.",
        type: 'divers'
    }, {
        icon: <FontAwesomeIcon icon={solid('Database')} className="i"
            size='5x'
        />,
        title: "MySQL",
        description: "Gestion de bases de données avec Mysql grâce a Doctrine, Sequelize.",
        type: 'database'
    }, {
        icon: <FontAwesomeIcon icon={solid('magnifying-glass')} className="i"
            size='5x'
        />,
        title: "Typesense",
        description: "Moteur de recherche Typesense.",
        type: 'skills'
    },{
        icon: <FontAwesomeIcon icon={brands('Html5')} className="i"
            size='5x'
        />,
        title: "HTML 5",
        description: "Création/Gestion d'un squelette en HTML.",
        type: 'langage'
    }, {
        icon: <FontAwesomeIcon icon={brands('Css3')} className="i"
            size='5x'
        />,
        title: "CSS 3",
        description: "Mise en forme basique du Design.",
        type: 'langage'
    }, {
        icon: <FontAwesomeIcon icon={solid('mobile-screen-button')} className="i"
            size='5x'
        />,
        title: "Mobile first",
        description: "Développement tourné pour le mobile",
        type: 'skills'
    }, {
        icon: <FontAwesomeIcon icon={brands('Dev')} className="i"
            size='5x'
        />,
        title: "Bonnes pratiques",
        description: "Soucie de développement propre et maintenable",
        type: 'skills'
    }
]


export default comp;