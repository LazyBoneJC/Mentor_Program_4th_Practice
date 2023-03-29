import React from "react";
import TodoItem from "./TodoItem";
import useTodos from "./useTodos";

function App() {
  // 乾淨的寫法：把邏輯都寫在 custom hook 裡面，App.js 下面就只剩 UI 而已
  const {
    todos,
    handleButtonClick,
    handleDeleteTodo,
    handleToggleIsDone,
    value,
    handleChange,
  } = useTodos();

  // 下面只剩下 UI，代表介面跟邏輯是完全分開的。
  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="todo"
          value={value}
          onChange={handleChange} // 原本是 handleInputChange
        />
        <button onClick={handleButtonClick}>Add Todo</button>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleIsDone={handleToggleIsDone}
        />
      ))}
    </div>
  );
}

export default App;
