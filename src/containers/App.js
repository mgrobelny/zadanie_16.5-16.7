// kontener
import React from 'react';
import uuid from 'uuid'; // import biblioteki uuid - tworzenie unikatowych wartości dla klucza id
import style from './App.css'; // stylowanie App
import Title from '../components/Title'; // import komponentu prezentacyjnego - nagłówek + licznik zadań
import TodoList from '../components/TodoList'; // import komponentu prezentacyjnego z listą zadań

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { // przykładowe dane - lista zadań
            data: [
                {id: 1,
                text: 'Clean the room'
                }, {
                id: 2,
                text: 'Wash the dishes'
                }, {
                id: 3,
                text: 'Feed my cat'
                }]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title = "My list" number={this.state.data.length} />
                <TodoList remove={this.removeTodo.bind(this)} data={this.state.data} />
            </div>
        );
    }
}

export default App;