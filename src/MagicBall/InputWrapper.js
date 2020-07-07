import React from 'react';
export default props => (
    <div>
        <input type='text' placeholder='Задай мне вопрос'>{props.input}</input>
        <button>Получить ответ</button>
    </div>
)
