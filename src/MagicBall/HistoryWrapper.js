import React from 'react'
export default props => (
    <div>
        <h3>Ваши предсказания:</h3>
        <>
        <div>{props.question}</div>
        <div>{props.answer}</div>
        </>
    </div>
)