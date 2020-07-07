import React from 'react';
export default props =>(
    <div style={{display: 'flex', alignContent: 'center', backgroundColor: '#333', width: 100, height: 100}}>
        <div style={{backgroundColor: 'white', width: 90, height: 90, margin: 'auto'}}>{props.answer}</div>
    </div>
)


