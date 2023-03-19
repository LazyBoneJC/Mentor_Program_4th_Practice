import { useState, useRef } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

function App() {
  // const [id, setId] = useState(1);
  const [todos, setTodos] = useState([]); // useState(初始值)
  const [value, setValue] = useState("");
  const id = useRef(0);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    // setId(id + 1);
    id.current++;
    setTodos([
      {
        id: id.current,
        content: value,
      },
      ...todos,
    ]);
    setValue("");
  };

  const handleDeleteTodo = (id) => {
    // filter() -> callback 回傳 true 的才會留下來
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="todo"
          value={value}
          onChange={handleInputChange}
        />
        {/* <input ref={inputRef} type="text" placeholder="todo" /> */}
        <button onClick={handleButtonClick}>Add Todo</button>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
}

export default App;
