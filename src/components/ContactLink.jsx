
import React from 'react'
import { useState, useEffect } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { send } from 'emailjs-com';

export default function ContactLink() {

    const notify = () => toast("Envoyé !");

    const [toSend, setToSend] = useState({ from_name: "", reply_to: "", tel: "", message: '' })
    const [isFormValid, setIsFormValid] = useState(false);
    
    useEffect(() => {
    const isFormFilled =
        toSend.from_name.trim() !== "" &&
        toSend.reply_to.trim() !== "" &&
        toSend.tel.trim() !== "";

    setIsFormValid(isFormFilled);
    }, [toSend]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
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
          } else {
            alert("Veuillez remplir tous les champs obligatoires avant d'envoyer le formulaire.");
          }
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <section id="sec-2">
            <ToastContainer />
            <h1>Formulaire de contact</h1>
            <p>Merci de rentrer des coordonnées exactes. <br /> Je vous recontacterai au plus vite.</p>
            <div className="conatactephp">
                <div className="start-template">
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="from_name">Nom, Prenom ou raison social</label>
                                    <input type="text" name="from_name" required="required" className="form-control from_name" id="from_name" value={toSend.from_name} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="reply_to">Email</label>
                                    <input type="text" name="reply_to" required="required" className="form-control reply_to" id="reply_to" value={toSend.reply_to} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="tel">Numero de contact</label>
                                    <input type="tel" name="tel" required="required" className="form-control tel" id="tel" value={toSend.tel} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <div className="form-group">
                                    <label htmlFor="message" className="message">Message</label>
                                    <textarea name="message" id="message" className="form-control message" value={toSend.message} onChange={handleChange} ></textarea>
                                </div>
                                <br />
                                <button className="btn btn-primary" onClick={notify} disabled={!isFormValid} type="submit">Envoyer</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}