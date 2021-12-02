import Top from '../components/Top';
import Skills from '../components/Skills';
import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Download from '../components/Download';

export function About() {
    return (
        <div className="body">
            <Top />
            <Skills />
            <Download />
            <Nav />
            <Footer />
        </div>
    )
}