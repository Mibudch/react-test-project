import React, { Component } from 'react';
import InputComponent from './InputComponent/InputComponent'
import './ToDoList';
class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrTodos: ['task', 'task', 'task', 'task',]
        }
    };

    render() {
        const arrTodos = this.state.arrTodos
        return (
            <>
                <h1>You have {arrTodos.length || 0} Todos</h1>
                {/* {this.state.arrTodos.map((elem, indx) => {
                return (
                    
                )
            })} */}
                <InputComponent />
            </>
        )
    }
};

export default ToDoList;