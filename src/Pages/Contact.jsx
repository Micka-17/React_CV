import React from 'react'

import { motion } from "framer-motion"

import Mburger from '../components/Mburger';
import Top2 from '../components/Top2';
import Footer from '../components/Footer';
import Download from '../components/Download';
import ContactLink from '../components/ContactLink';


export default function Contact() {
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
                    <Top2 />
                    <ContactLink />
                    <Download />
                    <Footer />
                </div>
            </motion.div>
        </div>
    )
}