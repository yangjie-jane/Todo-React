import React, { useState } from "react";
import "./TodoForm.css";
import { addTodo } from "../redux/actions";
import { connect } from "react-redux";
import { getTodos } from "../redux/selectors";

function TodoForm(props) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length === 0) {
      return;
    }

    props.addTodo(text);

    setText("");
  };

  return (
    <div className="todo-form">
      <p> What needs to be done? </p>
      <form onSubmit={handleSubmit} className="todo-form__content">
        <input
          required
          type="text"
          // id="new-todo"
          onChange={handleChange}
          value={text}
        />
        <button className="todo-form__content__button">
          Add #{props.todos.length + 1}
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (data) => dispatch(addTodo(data)),
});

function mapStateToProps(state) {
  const todos = getTodos(state);

  return { todos };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
