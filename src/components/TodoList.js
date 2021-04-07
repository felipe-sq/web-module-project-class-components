// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(item => (
                <Todo toggleTodo={props.toggleTodo} key={item.id} item={item} />
            ))}
                <button onClick={props.clearCompleted} className="complete-btn">Clear Completed</button>
        </div>
    );
};

export default TodoList;