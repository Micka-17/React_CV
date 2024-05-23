import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDebian, faDocker, faSymfony, faBootstrap, faDev, faNode, faReact, faCss3, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faShop, faCode, faMagnifyingGlass, faDatabase, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'


const comp = [
    {
        icon: <FontAwesomeIcon icon={faDebian} className="i"
           size='5x'
        />,
        title: "Debian",
        description: "DevOps chez LeLavoir : gestion des serveurs et des déploiements"
    } , {
        icon: <FontAwesomeIcon icon={faDocker} className="i"
           size='5x'
        />,
        title: "Docker",
        description: "DevOps chez LeLavoir, ainsi que le site sur le quel vous vous trouvez"
    },
    {
        icon: <FontAwesomeIcon icon={faSymfony} className="i"
           size='5x'
        />,
        title: "Symfony",
        description: "Développeur FullStack chez Florajet et LeLavoir : maintenance et développement de nouvelles fonctionnalités"
    }, {
        icon: <FontAwesomeIcon icon={faShop} className="i"
           size='5x'
        />,
        title: "Sylius",
        description: "DevOps chez LeLavoir : maintenance et développement de nouvelles fonctionnalités"
    }, {
        icon: <FontAwesomeIcon icon={faReact} className="i"
           size='5x'
        />,
        title: "React",
        description: "Développeur FullStack chez Florajet et mon site actuel : maintenance et développement de nouvelles fonctionnalités"
    }, {
        icon: <FontAwesomeIcon icon={faNode} className="i"
           size='5x'
        />,
        title: "NodeJs",
        description: "Construisez une API sécurisée pour une application d'avis gastronomiques Node.Js, Express, MongoDB"
    }, {
        icon: <FontAwesomeIcon icon={faCode} className="i"
           size='5x'
        />,
        title: "Ajax",
        description: "AJAX (Asynchronous JavaScript + XML)"
    }, {
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} className="i"
           size='5x'
        />,
        title: "Typesense",
        description: "Développeur FullStack chez Florajet"
    }, {
        icon: <FontAwesomeIcon icon={faDatabase} className="i"
           size='5x'
        />,
        title: "MySQL",
        description: "Gestion de bases de données avec Mysql grâce a Axios, Sequelize"
    }, {
        icon: <FontAwesomeIcon icon={faHtml5} className="i"
            size='5x'
        />,
        title: "HTML 5",
        description: "Création/Gestion d'un squelette en HTML"
    }, {
        icon: <FontAwesomeIcon icon={faCss3} className="i"
            size='5x'
        />,
        title: "CSS 3",
        description: "Mise en forme basique du Design."
    }, {
        icon: <FontAwesomeIcon icon={faJsSquare} className="i"
            size='5x'
        />,
        title: "Javascript",
        description: "Réalisation d'une maquette d'un site e-commerce en HTML, CSS, Javascript Vanilla"
    }, {
        icon: <FontAwesomeIcon icon={faMobileScreenButton} className="i"
            size='5x'
        />,
        title: "Mobile first",
        description: ""
    }, {
        icon: <FontAwesomeIcon icon={faBootstrap} className="i"
            size='5x'
        />,
        title: "Bootstrap",
        description: ""
    }, {
        icon: <FontAwesomeIcon icon={faDev} className="i"
            size='5x'
        />,
        title: "Bonnes pratiques",
        description: ""
    }
]


export default comp;