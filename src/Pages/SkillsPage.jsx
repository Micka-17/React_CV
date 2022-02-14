import React from 'react'

import { motion } from "framer-motion"

import Mburger from '../components/Mburger';
import Top2 from '../components/Top2';
import Skills from '../components/Skills';
import Download from '../components/Download';
import Footer from '../components/Footer';


export default function SkillsPage() {
    
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }

    return (
        <div>
            <Mburger />
            <motion.div initial="hidden" animate="visible" variants={variants} >
                <div className="body">
                    <Top2 />
                    <Skills page="Skills" />
                    <Download />
                    <Footer />
                </div>
            </motion.div>
        </div>
    )
}