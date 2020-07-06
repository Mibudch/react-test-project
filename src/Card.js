import React from 'react'
import './Card.css'
export default props => (
    <div className='Card'>
        <div>Animal: <strong>{props.animal}</strong></div>
        <div>Name: <strong>{props.name}</strong></div>
        <div>Age: <strong>{props.age}</strong></div>
    </div>
)