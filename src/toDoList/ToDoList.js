import React, { Component } from 'react';
import TodoWrapper from './TodoWrapper/TodoWrapper'
import './ToDoList';
class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrTodos: ['firstTask', 'secondTask', 'thirdTask'],
            inputValue: '',
            flag: true
        }
    };
    handlerOnChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };
    handlerOnClick = () => {
        if (this.state.inputValue && this.state.flag) {
            const arr = [...this.state.arrTodos]
            const newArr = arr.concat(this.state.inputValue)
            this.setState({
                arrTodos: newArr,
                inputValue: '',
                flag: true
            })
            if (this.state.inputValue && !this.state.flag) {
                
            }
        }
    }
    handlerDone = (i) => {
        const arr = [...this.state.arrTodos]
        arr.splice(i, 1)
        this.setState({
            arrTodos: arr,
        })
    };
    handlerEdit = (elem) => {
        console.log(elem)
        this.setState({
            inputValue: elem,
            flag: false
        })
    }
    render() {
        return (
            <>
                <h1>You have {this.state.arrTodos.length || 0} Todos</h1>
                <input type='text' placeholder='type here your todo' value={this.state.inputValue} onChange={this.handlerOnChange} />
                <button onClick={this.handlerOnClick}>add</button>
                <ol>
                    {this.state.arrTodos.map((elem, i) => {
                        return (
                            <TodoWrapper
                                key={i}
                                task={elem}
                                handlerDone={this.handlerDone.bind(this, i)}
                                handlerEdit={this.handlerEdit.bind(this, elem)}
                            />
                        )
                    })}
                </ol>
            </>
        )
    }
};

export default ToDoList;