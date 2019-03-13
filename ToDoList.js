import React, {Component} from "react"
import App from './App'
import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this)
    }

    addItem(e){
        if (this._inputElement.value !== "") {
            var NewItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(NewItem)
            }
         })
        this._inputElement.value = ""
        }
        
        console.log(this.state.items)
        e.preventDefault()
    }

    render() {
        return (
            <div className="todoListMain">
             <div className="header">
                <h1>Here's my To do List</h1>
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a}
                            placeholder="Write here.."></input>
                    <button type="submit">Add task</button>
                </form>
            </div>
            <App entries={this.state.items}/>
        </div>
        )
    }
}
export default TodoList