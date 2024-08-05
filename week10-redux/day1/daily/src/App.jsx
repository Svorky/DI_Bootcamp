import React, { useReducer, useState } from "react";
import './App.css';
import { useRef } from 'react';

// Reducer function
function todoReducer(state, action) {
  switch(action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      const todoEdit = state.find(todo => todo.id === action.payload.id);
      todoEdit.text = action.payload.text
      return [...state];
    case "CHECK":
      const todoCheck = state.find(todo => todo.id === action.id);
      todoCheck.completed = !todoCheck.completed
      return [...state]
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const ul = useRef()
  const filterButton = useRef()

  const handleAddTodo = () => {
    if(todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditTodo = (event, id) => {
    const list = ul.current
    const li = list.children[id]
    console.log(event.target)
    if(event.target.innerText === 'Edit'){

      const span = li.querySelector('span')
      const text = span.innerText
      const input = document.createElement('input')
      input.value = text
      input.setAttribute('id', 'newValue')
      span.replaceWith(input)
      event.target.innerText = 'Save'
    } else {
      const input = li.querySelector('#newValue')
      const text = input.value
      const span = document.createElement('span')
      span.innerText = text
      input.replaceWith(span)
      event.target.innerText = 'Edit'
      dispatch({ type: "EDIT_TODO", payload: {
        id: id,
        text: text
      } });
    }
  };

  const handleCheckbox = (id) => {
    dispatch({ type: "CHECK", id });
  };

  const handleFilter = () => {
    // filterButton.current.innerText
  }

  return (
    <div className='app'>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={ todoText }
        onChange={ (e) => setTodoText(e.target.value) }
      />
      <button onClick={ handleAddTodo }>Add Todo</button>
      <br />
      <button ref={filterButton} onClick={handleFilter}>Hide Completed</button>
      <ul className='list' ref={ul}>
        { todos.map((todo) => (
          <li key={ todo.id } id={todo.id}>
            <input type='checkbox' checked={ todo.completed } onChange={ () => handleCheckbox(todo.id) } />
            <span>{ todo.text }</span>
            <button onClick={ (event) => handleEditTodo(event, todo.id) }>Edit</button>
            <button onClick={ () => handleRemoveTodo(todo.id) }>Remove</button>
          </li>
        )) }
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;