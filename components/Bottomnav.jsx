import React from 'react'

export default function Bottomnav(props) {

    const classname = props.darkmode ? "darkmode" : "lightmode"

    console.log("bottombar" +classname)

    return (
        <>
            <div className={`${classname} header__bottombar`}>
                <a className={classname} href="https://www.linkedin.com/in/zeno-degenkamp/">LINKEDIN</a>
                <a className={classname} href="https://www.linkedin.com/in/zeno-degenkamp/">GITHUB</a>
                <a className={classname} href="mailto:zenodegenkamp@hotmail.com" target="_blank">EMAIL</a>
            </div>
        </>

    )
}
