import React from 'react';
import './inputWrapper.css'
export default props => (
    <div className='align'>
        <input className='input' type='text' value={props.value} placeholder='Задай мне вопрос' onChange={props.onChange}></input>
    </div>
)
