import { useState, useEffect, useRef, useCallback } from "react";
import useInput from "./useInput";

function writeTodosToLocalStorage(todos) {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

export default function useTodos() {
  const id = useRef(1);
  const { value, setValue, handleChange } = useInput();
  const [todos, setTodos] = useState(() => {
    console.log("init");
    let todoData = window.localStorage.getItem("todos") || "";
    if (todoData) {
      todoData = JSON.parse(todoData);
      id.current = todoData[0].id + 1;
    } else {
      todoData = [];
    }
    return todoData;
  }); // useState(初始值)(lazy initializer)

  // useEffect 執行時間點：render完，畫面paint出來以後。
  useEffect(() => {
    writeTodosToLocalStorage(todos);
    console.log("useEffect:", JSON.stringify(todos));

    // Cleanup function
    return () => {
      console.log("clearEffect:", JSON.stringify(todos));
    };
  }, [todos]); // todos 有改變就重新執行 effect

  const handleButtonClick = useCallback(() => {
    setTodos([
      {
        id: id.current,
        content: value,
      },
      ...todos,
    ]);
    id.current++;
    setValue("");
  }, [setTodos, setValue, todos, value]);

  const handleDeleteTodo = (id) => {
    // filter() -> callback 回傳 true 的才會留下來
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo, // todo 原本的東西
          isDone: !todo.isDone, // 加上要修改的屬性
        };
      })
    );
  };

  return {
    todos,
    setTodos,
    id,
    handleButtonClick,
    handleDeleteTodo,
    handleToggleIsDone,
    value,
    setValue,
    handleChange,
  };
}
