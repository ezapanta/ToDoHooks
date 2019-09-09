import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Intitilize state variables
  const [todos, setTodos] = useState([]);
  const [pendingTodo, changeText] = useState('');

  const verifyForm = (event) => {
    event.preventDefault();
    if(pendingTodo.length > 0) {
      setTodos([...todos, { text: pendingTodo, id: todos.length + 1 }]); 
    } else {
      alert('Please type a task to enter it to the list')
    }
  }

  const removeTodo = (event) => {
    event.preventDefault();
    setTodos(todos.filter(todo => todo.id === event.target.value))
  }

  return (
    <div>
      <form>
        <input type="text" value={pendingTodo} onChange={(text) => changeText(text.target.value)}></input>
        <button onClick={verifyForm}>Add</button>
      </form>
      <ul>
        {todos.map(todo =>
          <li key={todo.id} onClick={removeTodo}>{todo.text}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
