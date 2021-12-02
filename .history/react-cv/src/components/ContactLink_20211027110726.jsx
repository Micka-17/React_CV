import '../Style/style.css'
import React from 'react'

import '../Style/style.css'

export default function ContactLink() {

    return (
        <section id="sec-2">
            <h1>Formulaires de conatact</h1>
            <p>Merci de rentrer des coordonnées exact. <br/> Vous reconcaterais au plus vite.</p>
            <div className="conatactephp">
                <div className="start-template">
                    <form action="postcontact.php" method="POST">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label for="fullname">Nom Prenom</label>
                                    <input type="text" name="full-name" className="form-control" id="name" />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label for="inputmail">Votre mail</label>
                                    <input type="text" name="mail" className="form-control" id="inputmail" />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label for="inputnum">Numero de contact</label>
                                    <input type="text" name="numero" className="form-control" id="inputnum" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="from-group">
                                    <label for="" className="inputmessage"></label>
                                    <textarea name="message" id="inputemessage" className="form-control"></textarea>
                                </div>
                                <button className="btn btn-primary" type="submit">Envoyer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}