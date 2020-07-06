import React, { Component } from 'react';
import TodoWrapper from './TodoWrapper/TodoWrapper'
import './ToDoList';
class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrTodos: ['firstTask', 'secondTask', 'thirdTask'],
            inputValue: '',
            buttonValue: 'add',
            indexTodo: ''
        }
    };
    handlerOnChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };
    handlerOnClick = () => {
        if (this.state.inputValue && this.state.buttonValue === 'add') {
            const arr = [...this.state.arrTodos]
            const newArr = arr.concat(this.state.inputValue)
            this.setState({
                arrTodos: newArr,
                inputValue: '',
            })
        }
        if (this.state.inputValue && this.state.buttonValue === 'edit') {
            const arr = [...this.state.arrTodos]
            arr.splice(this.state.indexTodo, 1, this.state.inputValue)
            this.setState({
                arrTodos: arr,
                indexTodo: '',
                buttonValue: 'add',
                inputValue: ''
            })
        }
    }
    handlerDone = (i) => {
        const arr = [...this.state.arrTodos]
        arr.splice(i, 1)
        this.setState({
            arrTodos: arr,
        })
    };
    handlerEdit = (elem, i) => {
        this.setState({
            inputValue: elem,
            buttonValue: 'edit',
            indexTodo: i
        })
    }
    render() {
        return (
            <>
                <h1>You have {this.state.arrTodos.length || 0} Todos</h1>
                <input type='text' placeholder='type here your todo' value={this.state.inputValue} onChange={this.handlerOnChange} />
                <button onClick={this.handlerOnClick}>{this.state.buttonValue}</button>
                <ol>
                    {this.state.arrTodos.map((elem, i) => {
                        return (
                            <TodoWrapper
                                key={i}
                                task={elem}
                                handlerDone={this.handlerDone.bind(this, i)}
                                handlerEdit={this.handlerEdit.bind(this, elem, i)}
                            />
                        )
                    })}
                </ol>
            </>
        )
    }
};

export default ToDoList;