import React, { Component } from 'react';
import InputComponent from './InputComponent'
import './ToDoList';
class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrTodos: ['task', 'task', 'task', 'task',]
        }
    };
    render() {
        return (
            <>
                <h1>You have {this.state.arrTodos.length} Todos</h1>
                <InputComponent />
            </>
        )
    }
};

export default ToDoList;