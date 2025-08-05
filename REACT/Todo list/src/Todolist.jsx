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
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(idx)}
              style={{
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
      <button
        onClick={clearTodos}
        style={{
          marginTop: "2em",
          width: "100%",
          background: "#e74c3c",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "0.7em",
          fontWeight: "bold",
          fontSize: "1em",
          cursor: "pointer"
        }}
      >
        Tout supprimer
      </button>
    </div>
  );
}

export default TodoList;