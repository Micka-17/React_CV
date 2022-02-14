import React from 'react'

import { motion } from "framer-motion"

import Mburger from '../components/Mburger';
import Top2 from '../components/Top2';
import Footer from '../components/Footer';
import Download from '../components/Download';
import ContactLink from '../components/ContactLink';


export default function Contact() {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }

    return (
        <div>
            <Mburger />
            <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 1 }}>
                <div className="body">
                    <Top2 />
                    <ContactLink />
                    <Download />
                    <Footer />
                </div>
            </motion.div>
        </div>
    )
}