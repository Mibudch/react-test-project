import React from 'react'
import './HistoryWrapper.css'
export default props => (
    <div className= 'padding'>
        <div className='question'>{props.question}</div>
        <div><span className={props.className}>&#9728;</span> {props.answer}</div>
    </div>
)

