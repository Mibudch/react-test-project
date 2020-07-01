import React from 'react';

export default props => (
    <li>
        {props.task}
        <button onClick={props.handlerDone}>done</button>
    </li>
);