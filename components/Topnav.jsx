import React from 'react'
import logo from '../images/logo.png'
import hamburger from '../images/menu.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

export default function Topnav(props) {

    const [toggleMenu, setToggleMenu] = React.useState(false)

    return (
        <>
            <nav>
                <img className="header__logo" src={logo} alt="logo"></img>
                <ul className='header__links'>
                    <li><a onClick={() => props.navBarClick(0)} href="#">Ko Phi Phi</a></li>
                    <li><a onClick={() => props.navBarClick(1)} href="#">Koa Tao</a></li>
                    <li><a onClick={() => props.navBarClick(2)} href="#">Khao Sok</a></li>
                    <li><a onClick={() => props.navBarClick(3)} href="#">Chiang Mai</a></li>
                    <li><a onClick={() => props.navBarClick(4)} href="#">Pai</a></li>
                </ul>
                {/* <img className="header__menu" src={hamburger} alt="menu"></img> */}
                <div className="header__menu">
                    {toggleMenu
                        ? (<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />)
                        : (<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                        )}
                    {toggleMenu && (
                        <div className="navbar__menu_container scale-up-center">
                            
                                <ul className="navbar__menu_container_links">
                                    <li><a onClick={() => props.navBarClick(0)} href="#">Ko Phi Phi</a></li>
                                    <li><a onClick={() => props.navBarClick(1)} href="#">Koa Tao</a></li>
                                    <li><a onClick={() => props.navBarClick(2)} href="#">Khao Sok</a></li>
                                    <li><a onClick={() => props.navBarClick(3)} href="#">Chiang Mai</a></li>
                                    <li><a onClick={() => props.navBarClick(4)} href="#">Pai</a></li>
                                </ul>

                         
                        </div>
                    )}
                </div>
            </nav>

        </>
    )
}