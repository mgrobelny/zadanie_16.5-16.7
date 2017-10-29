// komponent prezentacyjny
import React from 'react';
import style from './Title.css';

const Title = props => {
// forma zapisu nagłówka - tytuł + liczba zadań + wartość tej liczby
	return (
			<div className={style.Title}>
			<h1>{props.title}</h1>
			<div><p>Number of items:</p> {props.number}</div>
			</div>
			);
}

// wyeksportowanie na potrzeby App.js
export default Title;