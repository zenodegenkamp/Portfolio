import React, {useState, useEffect} from "react"
import location from '../images/location.png'
import sun from '../images/sun.png'
import duration from '../images/duration.png'
import back from '../images/back.png'
import next from '../images/next.png'
import dataSet from '../data.js'
import Topnav from '../components/Topnav'
import Sidenav from "../components/Sidenav"


export default function Header(){

    const [currentIndex, setCurrentIndex] = useState(0)

    const headerStyle = {
        background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${dataSet[currentIndex].locationImageUrl}) no-repeat`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minWidth: '100%',
        minHeight: '100%',
        position: 'relative',
      };
      
      
      useEffect(() => {
        // Set the background size to cover when the currentIndex state variable changes.
        const element = document.querySelector('.header');
        element.style.backgroundSize = 'cover';
      }, [currentIndex]);
    
      

    function navBarClick(index){
        setCurrentIndex(index)
    }

    function handleClick(direction){

        if (currentIndex >= 0 && currentIndex <= 3 && direction === "right"){
            setCurrentIndex(oldValue => oldValue + 1)
        }
        else if (currentIndex >= 1 && currentIndex <= 4 && direction === "left"){
            setCurrentIndex(oldValue => oldValue - 1)
        }
        else if(currentIndex === 0 && direction === "left"){
            setCurrentIndex(4)
        }
        else if(currentIndex === 4 && direction === "right"){
            setCurrentIndex(0)
        }

    }
    return (
       <div className="header" style={headerStyle}>
      
      <Topnav navBarClick={navBarClick} />

        <Sidenav />

        <div className="header__row">
            <div>
                <div className="header__column__content">
                    <span><img src={location} alt="location icon"></img>{dataSet[currentIndex].location}</span>
                    <h1>{dataSet[currentIndex].locationh1}</h1>
                    <p>{dataSet[currentIndex].locationDescription}</p>
                </div>
            </div>
            <div>
                <div className="header__column__info">
                <span className="active"><img src={sun} alt="sun icon"></img>{dataSet[currentIndex].locationDegrees}</span>
                <span><img src={location} alt="location icon"></img>{dataSet[currentIndex].locationDistance}</span>
                <span><img src={duration} alt="duration icon"></img>{dataSet[currentIndex].locationDuration}</span>
                </div>
            </div>
        </div>

        <div className="header__arrow">
            <img onClick={() => handleClick("left")} src={back} alt="back arrow"></img>
            <img onClick={() => handleClick("right")} src={next} alt="next arrow"></img>

        </div>

       </div>
    )
} 