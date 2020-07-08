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
                { color: 'blue', answer: 'Бесспорно' },
                { color: 'blue', answer: 'Предрешено' },
                { color: 'blue', answer: 'Никаких сомнений' },
                { color: 'blue', answer: 'Определённо да' },
                { color: 'blue', answer: 'Можешь быть уверен в этом' },
                { color: 'green', answer: 'Мне кажется - "да"' },
                { color: 'green', answer: 'Вероятнее всего' },
                { color: 'green', answer: 'Хорошие перспективы' },
                { color: 'green', answer: 'Знаки говорят  - "да"' },
                { color: 'green', answer: 'Да' },
                { color: 'yellow', answer: 'Пока не ясно, попробуй ещё' },
                { color: 'yellow', answer: 'Спроси позже' },
                { color: 'yellow', answer: 'Лучше не рассказывать' },
                { color: 'yellow', answer: 'Сейчас нельзя предсказать' },
                { color: 'yellow', answer: 'Сконцентрируйся и спроси опять' },
                { color: 'red', answer: 'Даже не думай' },
                { color: 'red', answer: 'Мой ответ - "нет"' },
                { color: 'red', answer: 'По моим данным - "нет"' },
                { color: 'red', answer: 'Перспективы не очень хорошие' },
                { color: 'red', answer: 'Весьма сомнительно' },
            ],
            ballWrapper: 'Узнай свою судьбу',
            inputWrapper: '',
            historyWrapper: [],
            questionBoard: ''
        }
    }
    handlerOnclick = () => {
        const length = this.state.answers.length
        const random = Math.floor(Math.random() * length)
        const randomAnswer = this.state.answers[random]
        this.setState(  {
            ballWrapper: randomAnswer.answer
        })
        console.log(this.state.ballWrapper)
    }
    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>{this.state.title}</h1>
                <div className='inlineFlex'>
                    <InputWrapper onClick={this.handlerOnclick} />
                    <BallWrapper answer={this.state.ballWrapper} />
                    <HistoryWrapper historyWrapper={this.state.historyWrapper} />
                </div>
            </>
        )
    }
}

export default MagicBall;