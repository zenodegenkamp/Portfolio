import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faLocationDot} className="icon" style={{color: "#01579e",}} />
  

export default function Main(props){
    return (
        <div className="location-container">
            <img className="location-img" src={props.location.imageUrl} />
            <div className="location-container-text">
                <span>{element}</span>
                <span>{props.location.location} </span>
                <span><a className="link" href="{props.location.googleMapsUrl}">View on Google Maps</a></span>
                <h2>{props.location.title}</h2>
                <h5>{props.location.startDate} - {props.location.endDate}</h5>
                <p>{props.location.description}</p>
            </div>
            
        </div>
    )
}
