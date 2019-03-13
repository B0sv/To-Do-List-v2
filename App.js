import React, { Component } from 'react';
import ToDolist from './ToDoList'
import "./TodoList.css";


class App extends Component {

createTasks(item) {
      return <li key={item.key}>{item.text}</li>
  }
render() {
    var todoEntries = this.props.entries
    var listItems = todoEntries.map(this.createTasks)
    
    return (
        <ul className="theList">
            {listItems}
        </ul>
    )
}
}
export default App
