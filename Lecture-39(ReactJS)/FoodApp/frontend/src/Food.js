import React from 'react'

const Food = (props) => {
    const {name,imageUrl,description} = props.food;
    return (
        <div>
            <div>{name}</div>
            <img src={imageUrl}></img>
            <div>{description}</div>
        </div>
    )
}

export default Food
