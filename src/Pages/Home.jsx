import Top from '../components/Top';
import Skills from '../components/Skills';

import React from 'react'
import Footer from '../components/Footer';
import Download from '../components/Download';
import Mburger from '../components/Mburger';

import { motion } from "framer-motion"


export default function Home() {

    return (
        <div>
            <Mburger />
            <motion.div initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>
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