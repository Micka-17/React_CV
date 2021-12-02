import '../Style/style.css'
import React from 'react'

import '../Style/style.css'

export default function ContactLink() {

    return (
        <section id="sec-2">
            <h1>Formulaires de conatact</h1>
            <p>Merci de rentrer des coordonnées exact. <br/> Vous reconcaterais au plus vite.</p>
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
        </section>
    )
}