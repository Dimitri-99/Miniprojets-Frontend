import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="todo-container">
      <h1>Ma Todo List</h1>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button onClick={addTodo}>Ajouter</button>
      <button onClick={clearTodos} style={{marginLeft: "0.5em", background: "#e74c3c"}}>Tout supprimer</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo}
            <button
              onClick={() => removeTodo(idx)}
              style={{
                marginLeft: "1em",
                background: "#e74c3c",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                padding: "0.2em 0.7em"
              }}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;