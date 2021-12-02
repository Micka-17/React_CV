
import React from 'react'
import { useState, useEffect, useRef } from 'react'

import { send } from 'emailjs-com';



export default function ContactLink() {

    const [toSend, setToSend] = useState({ from_name: "", reply_to: "", number: "", message: '' })

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_utp6glp',
            'template_yn5ys1h',
            toSend,
            'user_q0Bg96ET7E9ESkMNXtIz7'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <section id="sec-2">
            <h1>Formulaire de contact</h1>
            <p>Merci de rentrer des coordonnées exact. <br/> Je vous reconcaterai au plus vite.</p>
            <div className="conatactephp">
                <div className="start-template">
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="from_name">Nom, Prenom</label>
                                    <input type="text" name="from_name" className="form-control from_name" id="from_name" value={toSend.from_name} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="reply_to">Email</label>
                                    <input type="text" name="reply_to" className="form-control reply_to" id="reply_to" value={toSend.reply_to} onChange={handleChange} />
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
                                    <label htmlFor="message" className="message">Message</label>
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