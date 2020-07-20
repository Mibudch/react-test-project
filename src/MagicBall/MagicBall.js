import React, { Component } from 'react';
import { BallWrapper } from './BallWrapper';
import InputWrapper from './InputWrapper';
import HistoryWrapper from './HistoryWrapper';
import './MagicBall.css'
import { answers} from './MagicBallConstant'

class MagicBall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Магический шар предсказаний',
            ballWrapper: 'Узнай свою судьбу',
            inputValue: '',
            historyWrapper: [],
        }
    }
    handlerOnclick = () => {
        if (this.state.inputValue) {
            const random = Math.floor(Math.random() * answers.length)
            const randomAnswer = answers[random]
            const newHistory = { question: this.state.inputValue, answer: randomAnswer.answer, color: randomAnswer.color }
            const historyWrapper = [newHistory, ...this.state.historyWrapper]
            this.setState({
                ballWrapper: randomAnswer.answer,
                historyWrapper: historyWrapper,
                inputValue: '',
            })
        }
    }
    handlerOnChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>{this.state.title}</h1>
                <div className='inlineFlex'>
                    <InputWrapper value={this.state.inputValue} onChange={this.handlerOnChange} />
                    <BallWrapper answer={this.state.ballWrapper} onClick={this.handlerOnclick} />
                    <div>
                        <h3 style={{ textAlign: 'center' }}>Ваши предсказания:</h3>
                        <div className='border' >
                            {this.state.historyWrapper?.map((elem, i) => {
                                return (
                                    <HistoryWrapper
                                        key={i}
                                        question={elem.question}
                                        answer={elem.answer}
                                        className={`m-${elem.color} ${'text'}`}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MagicBall;