import '../Style/style.css'
import React from 'react'
import { useState, useEffect, useRef } from 'react'

import { send } from 'emailjs-com';

import '../Style/style.css'

export default function ContactLink() {

    const [state, setState] = useState({ fullName: "", email: "", number: "", message: '' })

    const onSubmit = function (e) {
        e.preventDefault()
    
        console.log(state)
        const formData = new FormData();
        formData.append("fullName", state.fullName)
        formData.append("email", state.email)
        formData.append("number", state.number)
        formData.append("message", state.message)
    }

    return (
        <section id="sec-2">
            <h1>Formulaires de conatact</h1>
            <p>Merci de rentrer des coordonnées exact. <br/> Vous reconcaterais au plus vite.</p>
            <div className="conatactephp">
                <div className="start-template">
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="fullName">Nom Prenom</label>
                                    <input type="text" name="fullName" className="form-control fullName" id="fullName" value={toSend.fullName} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="email">Votre mail</label>
                                    <input type="text" name="email" className="form-control email" id="email" value={toSend.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="number">Numero de contact</label>
                                    <input type="number" name="number" className="form-control number" id="number" value={toSend.number} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="from-group">
                                    <label htmlFor="message" className="message"></label>
                                    <textarea name="message" id="message" className="form-control message" value={toSend.message} onChange={handleChange} ></textarea>
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