import React from 'react'
import './Place.css'



const Place = (props) => {
    return (
           <div>
               Name: {props.name}<br />
                <img className="img" src={props.imgUrl}></img>
            </div>
    )
}

export default Place
