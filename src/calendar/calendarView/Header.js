import React from 'react'
import './Header.css'
export const Header = (props) => (
    <header className='header'>
        <h2>{`${props.currentDay} ${props.currentMonth} ${props.currentYear} года`}</h2>
    </header>
)