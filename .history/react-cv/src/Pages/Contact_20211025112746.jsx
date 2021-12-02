import Top from '../components/Top';
import Skills from '../components/Skills';
import '../Style/style.css'
import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Download from '../components/Download';
import ContactLink
import '../Style/style.css'

export function Contact() {
    return (
        <div className="body">
            <Top />
            <Skills />
            <ContactLink />
            <Download />
            <Nav />
            <Footer />
        </div>
    )
}