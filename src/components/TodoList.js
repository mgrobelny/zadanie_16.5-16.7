// komponent prezentacyjny
import React from 'react';
import style from './TodoList.css'; // stylowanie
import Todo from './Todo'; // importowanie listy + przycisku usuwającego item

const TodoList = props => {
// tworzenie poszczególnych elementów listy
    const todoListItems = props.data.map(item => <Todo key={item.id} id={item.id} todo={item.text} remove={props.remove}/>)
    return (
        <ul className={style.TodoList}>{todoListItems}</ul>
    )
}

export default TodoList;