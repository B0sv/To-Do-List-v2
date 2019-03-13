import React from 'react'
import TodoItem from './Components/TodoItem'
import doData from './Components/doData'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: doData
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(id) {
        this.setState(prevState => {
            const updatedDoData = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedDoData
            }
        })
    }


    render() {
        const listD = this.state.todos.map(item => <TodoItem key={item.id} item={item}
        handleChange={this.handleChange}/>)
    
        return (
            <div className="todo-list">
                {listD}
            </div>
        )
    }
}
export default App
