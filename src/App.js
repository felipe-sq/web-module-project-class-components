import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

const todos = [
  {
    task: 'Mow the lawn',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Wash laundry',
    id: Date.now()+1,
    completed: false
  },
  {
    task: 'Do your homework!',
    id: Date.now()+2,
    completed: false
  },
  {
    task: 'Walk the dogs',
    id: Date.now()+3,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    }
  }

  toggleTodo = todoId => {
    console.log("Toggling todo task", todoId);
    const updatedTodos = this.state.todos.map(item => {
      if (todoId === item.id) {
        return { ...item, completed: !item.completed }
      }
      return item;
    });
    console.log("Updated todo array", updatedTodos);
    this.setState({
      ...this.state,
      todos: updatedTodos
    });
  }

  addTodo = todoName => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: todoName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>The Honey-Do List!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <br />
        <TodoList clearCompleted={this.clearCompleted} toggleTodo={this.toggleTodo} todos={this.state.todos} />
        <br />
      </div>
    );
  }
}

export default App;
