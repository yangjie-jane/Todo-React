import React from 'react';
import './TodoList.css'

export default function TodoList(props){
  return (
    <ul class = "todo-list">
      {props.items.map(item => (
        <li class = "todo-list__li--done" key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}