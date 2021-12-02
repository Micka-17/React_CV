import '../Style/style.css'
import React from 'react'
import { useState, useEffect, useRef } from 'react'

import '../Style/style.css'

export default function ContactLink() {

    const [state, setState] = useState({ fullName: "", email: "", number: "", message: '' })

    const SubmitPost = function (e) {
        e.preventDefault()
    
        console.log(state)
        const formData = new FormData();
        formData.append("title", details.title)
        formData.append("description", details.description)
        formData.append("imageName", details.imageName) // nom de l'image
        formData.append("image", details.file) // image vers api

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
                                    <label htmlFor="fullName">Nom Prenom</label>
                                    <input type="text" name="fullName" className="form-control fullName" id="fullName" onChange={e => setState({ state, fullName: e.target.value})} value={state.fullName} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="email">Votre mail</label>
                                    <input type="text" name="email" className="form-control email" id="email" onChange={e => setState({ state, email: e.target.value})} value={state.email} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="number">Numero de contact</label>
                                    <input type="number" name="number" className="form-control number" id="number" onChange={e => setState({ state, number: e.target.value})} value={state.number} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="from-group">
                                    <label htmlFor="message" className="message"></label>
                                    <textarea name="message" id="message" className="form-control message" onChange={e => setState({ state, message: e.target.value})} value={state.message} ></textarea>
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