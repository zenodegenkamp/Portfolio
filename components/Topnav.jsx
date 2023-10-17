import React from 'react'
import logo from '../images/logo.png'
import hamburger from '../images/menu.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import personallogo from '../images/personallogo.png'

export default function Topnav(props) {


    return (
        <>
            <nav className='header__topnav'>
                <p className={props.darkmode ? "darkmode" : "lightmode"}>Click me</p>
                <label >
                <span className='animateBg'></span>
                    <input  onClick={props.onClick} type="checkbox"></input>
                    
                    <span className="toggle"></span>
                </label>
                
            </nav>

        </>
    )
}