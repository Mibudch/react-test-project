import React from 'react'
import './HistoryWrapper.css'
export default props => (
    <div>
        <div className='question'>{props.question}</div>
        <div>{props.answer}</div>
    </div>
)