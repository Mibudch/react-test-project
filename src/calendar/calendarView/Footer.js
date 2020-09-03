import React from 'react';
import './Footer.css'
export const Footer = (props) => (
<div> <img src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`} alt=''></img> {props.place} {props.weather.temp} C&deg;</div>
)