import React from "react";
import TodoList from "./TodoList/TodoList";
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoForm from "./TodoForm/TodoForm";

export default function TodoApp() {
  return (
    <div>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </div>
  );
}
