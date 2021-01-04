import React, { useState } from 'react';
import TodoList from './TodoList/TodoList';
import TodoHeader from './TodoHeader/TodoHeader';
import TodoForm from './TodoForm/TodoForm';

export default function TodoApp(){
  const [items, setItems] = useState([]);

  const handler = newItem => {
    setItems(items.concat(newItem));
  };

  return (
    <div>
      <TodoHeader/>
      <TodoForm handler = {handler} itemsLength={items.length}/>
      <TodoList items={items} />
    </div>
  );
}