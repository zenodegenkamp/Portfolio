import React, { useState, useEffect, useRef } from "react"

import Topnav from '../components/Topnav'
import Sidenav from "../components/Sidenav"
import Bottomnav from "./Bottomnav"
import { TypingText } from '../components/CustomTexts'

import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, fadeIn, fadeIn1} from '../utils/motion';
import Spline from '@splinetool/react-spline';


export default function Header() {

    const [darkMode, setDarkMode] = React.useState("false");
    const [visibleInfo, setVisibleInfo] = React.useState("dev");


    const styles = {
        color: darkMode ? `black` : `white`,
        transition: `1.5s ease-out`,
      };

    function changeContent(e){
        if(e.target.className === "aboutme"){
            setVisibleInfo("aboutme")
        }
        else if (e.target.className === "portfolio"){
            setVisibleInfo("portfolio")

        }
        else if(e.target.className === "downloadCV"){
            setVisibleInfo("downloadCV")
        }
    }


    // BACKGROUND CHANGE LOGIC
    const spline = useRef();

    function onLoad(splineApp) {
      spline.current = splineApp;
    }
  
    function triggerAnimation() {
      spline.current.emitEvent('mouseDown', 'vorm1');
      spline.current.emitEvent('mouseDown', 'vorm2');
      setDarkMode(oldValue => !oldValue)
    }

    return (
        <div className="header" >
     
            <Spline onLoad={onLoad} className="spline-bg" scene="https://prod.spline.design/11h0se0nuALzwV9w/scene.splinecode" />
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >

        <motion.div variants={fadeIn1('down', 'tween', 0.2, 1)}>
            <Topnav  darkmode={darkMode} onClick={triggerAnimation} />
        </motion.div>
        <motion.div variants={fadeIn1('right', 'tween', 0.2, 1)}>
            <Sidenav darkmode={darkMode} onClick={changeContent}/>
        </motion.div>
                
        
                <div className="header__row">

                    <div className="header__column__content">
                        <TypingText
                            title="Zeno Degenkamp"
                            className="header__column__content-p"
                            darkmode={darkMode}
                        />
                        {visibleInfo === "dev" && <h1 style={styles}>Developer</h1>}
                        {visibleInfo === "aboutme" && <h1 style={styles}>About me</h1>}
                        {visibleInfo === "portfolio" && <h1 style={styles}>Portfolio</h1>}
                    </div>

                    <div className={darkMode ? `header__row__line lightmode-background`: `header__row__line darkmode-background`}>
                        <h1></h1>
                    </div>
                    <div>
                        <div className="header__column__info">
                        {visibleInfo === "dev" && <h1 style={styles}>Product owner</h1>}
                        {visibleInfo === "aboutme" && <p style={styles}>I'm Zeno, a driven professional with a background in business administration and IT. I hold a Master's degree in Entrepreneurship and a Bachelor's Degree in Business Administration, with a minor in programming. I've also completed the Front-end Career Path (Scrimba), a UX Design Thinking course from Growthtribe, and earned my Product Owner certification (PSPO 1).
Beyond certificates, I'm passionate about fitness, reading, and travel. I recently explored Asia for 8 months, gaining adaptability and impressive problem-solving skills. Now, I'm aiming to excel as a Product Owner. Explore my profile to learn more about me!</p>}
                        {visibleInfo === "portfolio" && <><p style={styles}>The portfolio website is inspired by the Apple vision pro and tries to create a 3D effect, which requires a larger screen to be fully appreciated. On a mobile device, the effect may be distorted or difficult to see. To discover my portfolio website in its full 3D glory, please use a laptop or a bigger screen. Thanks!</p><a style={styles}>Click here</a></>}

                        </div>
                    </div>

                    <motion.div variants={fadeIn1('down')}>
                    <Bottomnav darkmode={darkMode} />
                    </motion.div>

                </div>

            </motion.div>
        </div>
    )

}

