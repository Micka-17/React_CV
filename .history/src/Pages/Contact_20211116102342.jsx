import Top2 from '../components/Top2';
import Skills from '../components/Skills';
import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Download from '../components/Download';
import ContactLink from '../components/ContactLink';


export function Contact() {
    return (
        <div className="body">
            <Top2 />
            <ContactLink />
            <Download />
            <Nav />
            <Footer />
        </div>
    )
}