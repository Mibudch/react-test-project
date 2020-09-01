import React from 'react'
const month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
export const Header = (props) => (
    <header>
        <strong>{`${props.currentDay} ${props.currentMonth + 1} ${props.currentYear}`}</strong>
    </header>
)