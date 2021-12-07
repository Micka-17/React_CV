import Top2 from '../components/Top2';
import Skills from '../components/Skills';

import React from 'react'
import Footer from '../components/Footer';
import Download from '../components/Download';


export default function SkillsPage() {
    return (
    <div className="body">
        <Top2 />
        <Skills page = "Skills"/>
        <Download />
        <Footer />
    </div>
    )
}