import React from "react";
import "./TodoList.css";
import { getTodos } from "../redux/selectors";
import { connect } from "react-redux";

function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li className="todo-list__li--done" key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  const todos = getTodos(state);
  
  return { todos };
}

export default connect(mapStateToProps)(TodoList);
