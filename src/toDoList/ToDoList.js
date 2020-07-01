import React, { Component } from 'react';
import TodoWrapper from './TodoWrapper/TodoWrapper'
import './ToDoList';
class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrTodos: ['task', 'task', 'task'],
            inputValue: ''
        }
    };
    handlerOnChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };
    handlerOnClick = () => {
        this.setState({
            arrTodos: [this.state.arrTodos.push(this.state.inputValue)],
            inputValue: ''
        })
    }
    render() {
        return (
            <>
                <h1>You have {this.state.arrTodos.length || 0} Todos</h1>
                <input type='text' placeholder='type here your todo' onChange={this.handlerOnChange} />
                <button onClick={this.handlerOnClick}>add</button>
                <ul>
                    {this.state.arrTodos.map((elem, i) => {
                        return (
                            <TodoWrapper
                                key={i}
                                task={elem}
                            />
                        )
                    })}
                </ul>
            </>
        )
    }
};

export default ToDoList;