import Top from '../components/Top';
import Skills from '../components/Skills';

import React from 'react'
import Footer from '../components/Footer';
import Download from '../components/Download';
import Mburger from '../components/Mburger';

import { motion } from "framer-motion"


export default function Home() {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }

    return (
        <div>
            <Mburger />
            <motion.div initial="hidden" animate="visible" variants={variants} >
                <div className="body">
                    <Top />
                    <Skills page="home" />
                    <Download />
                    <Footer />
                </div>
            </motion.div>
        </div>
    )
}