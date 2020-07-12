import React from 'react';
import './BallWrapper.css';
export default props => (
    <div className='ball' onClick={props.onClick}>
        <div className='ballCenter'><div style={{ width: 130 }}>{props.answer}</div></div>
    </div>
)


