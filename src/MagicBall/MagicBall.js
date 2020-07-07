import React, { Component } from 'react';
import BallWrapper from './BallWrapper';
import InputWrapper from './InputWrapper';
import HistoryWrapper from './HistoryWrapper';
import './MagicBall.css'

class MagicBall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Магический шар предсказаний',
            answers: [
                { color: 'blue', answer: 'Бесспорно', attitude: '' },
                { color: 'blue', answer: 'Предрешено', attitude: '' },
                { color: 'blue', answer: 'Никаких сомнений', attitude: '' },
                { color: 'blue', answer: 'Определённо да', attitude: '' },
                { color: 'blue', answer: 'Можешь быть уверен в этом', attitude: '' },
                { color: 'green', answer: 'Мне кажется - "да"', attitude: '' },
                { color: 'green', answer: 'Вероятнее всего', attitude: '' },
                { color: 'green', answer: 'Хорошие перспективы', attitude: '' },
                { color: 'green', answer: 'Знаки говорят  - "да"', attitude: '' },
                { color: 'green', answer: 'Да', attitude: '' },
                { color: 'yellow', answer: 'Пока не ясно, попробуй ещё', attitude: '' },
                { color: 'yellow', answer: 'Спроси позже', attitude: '' },
                { color: 'yellow', answer: 'Лучше не рассказывать', attitude: '' },
                { color: 'yellow', answer: 'Сейчас нельзя предсказать', attitude: '' },
                { color: 'yellow', answer: 'Сконцентрируйся и спроси опять', attitude: '' },
                { color: 'red', answer: 'Даже не думай', attitude: '' },
                { color: 'red', answer: 'Мой ответ - "нет"', attitude: '' },
                { color: 'red', answer: 'По моим данным - "нет"', attitude: '' },
                { color: 'red', answer: 'Перспективы не очень хорошие', attitude: '' },
                { color: 'red', answer: 'Весьма сомнительно', attitude: '' },
            ],
            ballWrapper: 'Узнай свою судьбу',
            inputWrapper: '',
            historyWrapper: [],

        }
    }
    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>{this.state.title}</h1>
                <div className='inlineFlex'>
                    <InputWrapper />
                    <BallWrapper answer={this.state.ballWrapper} />
                    <HistoryWrapper historyWrapper={this.state.historyWrapper} />
                </div>
            </>
        )
    }
}

export default MagicBall;