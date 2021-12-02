import Top2 from '../components/Top2';
import Skills from '../components/Skills';
import '../Style/style.css'
import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Download from '../components/Download';
import '../Style/style.css'

export function SkillsPage() {
    return (
    <div className="body">
        <Top2 />
        <Skills />
        <Download />
        <Nav />
        <Footer />
    </div>
    )
}