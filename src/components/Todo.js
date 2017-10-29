import React from 'react';
import style from './Todo.css'; // stylowanie

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    // renderowanie listy - tytuł zadania z Todo oraz przycisk usuwający zadanie
    render() {
        return (
            <li className={style.Todo}>
                {this.props.todo} 
                <button onClick={event => this.handleClick()}>Remove</button>
            </li>
        )
    }

    // podpięcie handlera dla przycisku usuwającego zadanie
    handleClick(event) {
        this.props.remove(this.props.id);
    }
}

// wyeksportowanie na potrzeby TodoList.js
export default Todo;