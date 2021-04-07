import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

const todos = [
  {
    task: 'Organize Attic',
    id: Date.now()+1,
    completed: false
  },
  {
    task: 'Clean the oven',
    id: Date.now(),
    completed: false
  }
];

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
    console.log("Toggling todo", todoId);
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
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo}/>
        </div>
        <TodoList clearCompleted={this.clearCompleted} toggleTodo={this.toggleTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
