import React from 'react';

export default props => (
    <li onClick={props.handlerEdit}>
        {props.task}
        <button onClick={props.handlerDone}>done</button>
    </li>
);