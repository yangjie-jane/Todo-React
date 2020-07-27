import React from 'react';
import './TodoList.css'

export class TodoList extends React.Component {
  render() {
    return (
      <ul class = "todo-list">
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
