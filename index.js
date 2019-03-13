import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToDoList from './ToDoList'
import * as serviceWorker from './serviceWorker';
import TodoList from './ToDoList';
import "./index.css"

var destination = document.querySelector("#container");
 
ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
