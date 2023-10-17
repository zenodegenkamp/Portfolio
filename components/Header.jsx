import React, { useState, useEffect, useRef } from "react"

import Topnav from '../components/Topnav'
import Sidenav from "../components/Sidenav"
import Bottomnav from "./Bottomnav"
import Slider from "./Slider"
import { TypingText } from '../components/CustomTexts'

import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, fadeIn, fadeIn1 } from '../utils/motion';
import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Header() {

    const [darkMode, setDarkMode] = React.useState("true");
    const [visibleInfo, setVisibleInfo] = React.useState("dev");


    function changeContent(e) {
        if (e.target.className === "aboutme") {
            setVisibleInfo("aboutme")
        }
        else if (e.target.className === "portfolio") {
            setVisibleInfo("portfolio")

        }
        else if (e.target.className === "downloadCV") {
            setVisibleInfo("downloadCV")
        }
    }


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
                className="staggerContainer"
            >

                <motion.div variants={fadeIn1('down', 'tween', 0.2, 1)}>
                    <Topnav darkmode={darkMode} onClick={triggerAnimation} />
                </motion.div>
                <motion.div variants={fadeIn1('right', 'tween', 0.2, 1)}>
                    <Sidenav darkmode={darkMode} onClick={changeContent} />
                </motion.div>


                <div className="header__row">

                    
                        
                        <div className="header__column__content">
                        <TypingText
                            title={visibleInfo === "dev" ? "Hello, my name is" : "Zeno Degenkamp"}
                            className="header__column__content-p"
                            darkmode={darkMode}
                        />
                        {visibleInfo === "dev" && <h1 className="header__column__content__name">Zeno Degenkamp</h1>}
                        {visibleInfo === "aboutme" && <h1 >About me</h1>}
                        {visibleInfo === "portfolio" && <h1 >Portfolio</h1>}
                    </div>

                    <div className={darkMode ? `header__row__line lightmode-background` : `header__row__line darkmode-background`}>
                        <h1></h1>
                    </div>
                    <div>
                        <div className="header__column__info">
                            {visibleInfo === "dev" && <TypeAnimation
                                className="typeAnimation"
                                sequence={[
                                    'Entrepreneur',
                                    1000,
                                    'Front-end dev',
                                    1000,
                                    'UX-designer',
                                    1000,
                                    'Product owner',
                                    1000
                                ]}
                                wrapper="span"
                                speed={30}
                                style={{ fontSize: '64px', display: 'inline-block', color: 'white'}}
                                repeat={Infinity}
                            />}
                            {visibleInfo === "aboutme" && <p >I'm Zeno, a driven professional with a background in business administration and IT. 
                                Beyond certificates, I'm passionate about fitness, reading, and travel. I recently explored Asia for 8 months, gaining adaptability and impressive problem-solving skills. Now, I'm aiming to excel as a Product Owner. Explore my profile to learn more about me!</p>}
                                {visibleInfo === "portfolio" && <><p >Inspired by Apple Vision Pro, my portfolio website is optimized for a rich 3D experience on larger screens. If you're on a laptop or a bigger screen, you can explore my portfolio in all its 3D glory. But even if you're on a smaller device, you're still welcome to visit any of my project websites directly. </p>
                                
                                <div className="header__column__info__links">
                                <FontAwesomeIcon style={{ color: "white", fontSize: "15px", lineHeight: '27px' }}  icon={faLink} />
                                    <a target="_blank" href="https://zeno-degenkamp.netlify.app/" >PORTFOLIO</a>
                                    <a target="_blank" href="https://zingy-cassata-2ad8ad.netlify.app/" >AI CHATBOT</a>
                                    <a target="_blank" href="https://marvelous-fenglisu-f6d29b.netlify.app/">AI STORYCREATOR</a>
                                    <a target="_blank" href="https://codeconnect-react.netlify.app/" >CODE PLATFORM</a>
                                    <a target="_blank" href="https://travel-react-zeno.netlify.app/" >TRAVEL JOURNAL</a>
                                    <a target="_blank" href="https://hidden-quiz-minigame.netlify.app/" >INTERACTIVE QUIZ</a>
                                    <a target="_blank" href="https://icon-ninja.netlify.app/" >ICON GAME</a>
                                </div>
                                </>}

                        </div>
                    </div>
                   
                     <div id="test"></div>





                   

                    <motion.div variants={fadeIn1('down')}>
                        <Bottomnav darkmode={darkMode} />
                    </motion.div>
                  
                </div>
            </motion.div>
        </div>
    )
}