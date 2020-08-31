import React from 'react';
import './Section.css'
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',]
export const Section = (props) => (
    <section className= 'width'>
        <div className='flex'>
            {weekDays.map((el, i) => {
                return (
                    <div key={i} className='size border centried'>{el}</div>
                )
            })}
        </div>
        <div className='flex wrap'>
            {props.numberOfDays.map((el, i) => {
                return (
                    <div key={i} className='size border centried'>{el}</div>
                )
            })}
        </div>
    </section>
)