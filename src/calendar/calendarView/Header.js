import React from 'react'

export const Header = (props) => (
    <header>
        <div>{props.currentDate.toString()}</div>
    </header>
)