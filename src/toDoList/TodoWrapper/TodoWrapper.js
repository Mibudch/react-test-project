import React from 'react';

export default props => (
    <li>
        {props.task}
        <button>done</button>
        <button>edit</button>
    </li>
);