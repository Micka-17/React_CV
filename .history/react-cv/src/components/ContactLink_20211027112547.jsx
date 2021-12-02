import '../Style/style.css'
import React from 'react'
import { useState, useEffect, useRef } from 'react'

import '../Style/style.css'

export default function ContactLink() {

    const [state, setState] = useState("")

    const handleInput = (e) => {
        setState(e.target.value)
    }

    return (
        <section id="sec-2">
            <h1>Formulaires de conatact</h1>
            <p>Merci de rentrer des coordonnées exact. <br/> Vous reconcaterais au plus vite.</p>
            <div className="conatactephp">
                <div className="start-template">
                    <form action="postcontact.php" method="SUBMIT">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label for="fullName">Nom Prenom</label>
                                    <input type="text" name="fullName" className="form-control" id="fullName" onChange={e => setState({ state, fullName: e.target.value})} value={state.fullName} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label for="email">Votre mail</label>
                                    <input type="text" name="email" className="form-control" id="email" />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label for="number">Numero de contact</label>
                                    <input type="number" name="number" className="form-control" id="number" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="from-group">
                                    <label for="message" className="message"></label>
                                    <textarea name="message" id="emessage" className="form-control"></textarea>
                                </div>
                                <br />
                                <button className="btn btn-primary" type="submit">Envoyer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}