import React, { useReducer, useState } from 'react';

const TodoApp = () => {
  const todoReducer = (todos, action) => {
      switch(action.type){
        case 'ADD_TODO': 
        return [...todos, {id: Date.now(), text: action.payload , completed: false }];
        case 'REMOVE_TODO':
        return todos.filter(todo => todo.id !== action.payload ); // this will create a new todo array which does not havee the id action.payload
        case 'TOGGLE_TODO':
        return todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
        default: 
        return todos; 
      }
  };

  const [todos, dispatch] = useReducer(todoReducer, []);

  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch({type: 'ADD_TODO', payload:newTodo.trim()});
      setNewTodo('')
    }
  };

  const toggleTodo = (id) => {
    dispatch({type: "TOGGLE_TODO" , payload:id});
  };

  const removeTodo = (id) => {
    dispatch({type: 'REMOVE_TODO', payload: id})
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input 
            type='checkbox'
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoApp;
