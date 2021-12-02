import React from 'react'
import '../Style/style.css'
import 'font-awesome/css/font-awesome.min.css'
let FontAwesome = require('react-fontawesome');

export default function Skills() {

    return (
        <section id="sec-2">
        <h1>Mes compétences</h1>
        <p>Au sein d'une formation Openclassrooms j'ai acqui  </p>
        <div className="container" data-aos="zoom-in">
            <div className="competences">
            <FontAwesome
                className='fab fa-html5 fa-5x i'
                name='html5'
                size='5x'
            />
                <h2>L'HTML</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div>
            <div className="competences">
            <FontAwesome
                className='fab fa-css3 fa-5x i'
                name='css3'
                size='5x'
            />
                <h2>Le CSS</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div><div className="competences">
            <FontAwesome
                className="fas fa-mobile fa-5x i"
                name='mobile-alt'
                size='5x'
            />
                <h2>Le Responsive</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
            </div>
        </div>
    </section>
    )
}