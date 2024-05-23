import React, { useRef } from 'react';
import { motion } from "framer-motion";

import Top from '../components/Top';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Download from '../components/Download';
import Mburger from '../components/Mburger';

export default function Home() {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    const sec2Ref = useRef(null);

    return (
        <div>
            <Mburger />
            <motion.div initial="hidden" animate="visible" variants={variants} transition={{ duration: 1 }} >
                <div className="body">
                    <Top scrollToSection={() => sec2Ref.current.scrollIntoView({ behavior: 'smooth' })} />
                    <Skills sec2Ref={sec2Ref} page="home" />
                    <Download />
                    <Footer />
                </div>
            </motion.div>
        </div>
    )
}