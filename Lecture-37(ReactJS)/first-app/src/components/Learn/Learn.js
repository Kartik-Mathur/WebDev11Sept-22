import React from 'react'
import './Learn.css'

const Learn = () => {
    return (
        <div className="mydiv">
            Learning ReactJS: 
            {Math.floor(Math.random()*10)}
        </div>
    )
}

export default Learn;
