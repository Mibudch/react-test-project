import React from 'react';
import './BallWrapper.css';
export default props => (
    <div className='ball'>
        <div className='ballCenter'><div style={{ width: 130 }}>{props.answer}</div></div>
    </div>
)


