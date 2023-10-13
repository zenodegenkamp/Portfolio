import React from 'react'
import { motion } from 'framer-motion'


export default function Sidenav(props) {

    const classname = props.darkmode ? "darkmode" : "lightmode"

    return (
        <>

            <div
        
                className={`${classname} header__sidebar`}
                onClick={props.onClick}
            >
                <p className='aboutme'>
                    ABOUT ME
                </p>
                <p className='portfolio'>
                    PORTFOLIO PROJECT
                </p>
                <a>DOWNLOAD CV</a>
               
            </div>
        </>
    )
}
