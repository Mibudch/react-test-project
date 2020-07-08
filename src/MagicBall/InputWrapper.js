import React from 'react';
export default props => (
    <div>
        <input type='text' placeholder='Задай мне вопрос'>{props.input}</input>
        <button onClick={props.onClick}>Получить ответ</button>
    </div>
)
