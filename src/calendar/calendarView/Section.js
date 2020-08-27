import React from 'react';
import './Section.css'
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',]
export const Section = (props) => (
    <section className='flex'>
            {weekDays.map((el, i) => {
                return (
            <div key={i} className='size border centried'>{el}</div>
                )
            })}
            <div>{props.numberOfDays}</div>
    </section>
)