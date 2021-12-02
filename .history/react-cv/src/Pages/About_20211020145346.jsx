import React from 'react'
import '../Style/style.css'
import 'font-awesome/css/font-awesome.min.css'
let FontAwesome = require('react-fontawesome');

export default function conatact() {

    return (
        <div>
            <div class="marbre">
                <div class="container">
                    <h1>Mickaël Boï</h1>
                    <p>Mickael Dev React</p>
                    <a href="#sec-2" class="title-btn">Contact</a>
                </div>
            </div>

            <h1>Formulaires de conatact</h1>
            <p>Merci de rentrer des coordonnées exact. <br /> Vous reconcaterais au plus vite.</p>
            <div class="conatactephp">
                <div class="start-template">
                    <form action="postcontact.php" method="POST">
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="form-group">
                                <label for="inputname">Nom Prenom</label>
                                <input type="text" name="full-name" class="form-control" id="inputname" />
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="form-group">
                                <label for="inputmail">Votre mail</label>
                                <input type="text" name="mail" class="form-control" id="inputmail" />
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="form-group">
                                <label for="inputnum">Numero de contact</label>
                                <input type="text" name="numero" class="form-control" id="inputnum" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="from-group">
                                    <label for="" class="inputmessage"></label>
                                    <textarea name="message" id="inputemessage" class="form-control"></textarea>
                                </div>
                                <button class="btn btn-primary" type="submit">Envoyer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="container" data-aos="zoom-in">
                <div class="competences">
                    <i class="fab fa-html5 fa-5x"></i>
                    <h2>L'HTML</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
                </div>
                <div class="competences">
                    <i class="fab fa-css3 fa-5x"></i>
                    <h2>Le CSS</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
                </div><div class="competences">
                    <i class="fas fa-mobile-alt fa-5x"></i>
                    <h2>Le Responsive</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe consectetur, suscipit quas eveniet provident voluptatibus minima nisi recusandae ullamque. Est, incidunt!</p>
                </div>
            </div>
        </div>
    )
}