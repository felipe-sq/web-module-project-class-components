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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
