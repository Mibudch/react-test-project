import React from 'react';
export default props => (
    <div>
        <input type='text' value={props.value} placeholder='Задай мне вопрос' onChange={props.onChange}></input>
        <button onClick={props.onClick}>Получить ответ</button>
    </div>
)
