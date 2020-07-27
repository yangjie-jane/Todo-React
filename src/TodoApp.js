import React from 'react';
import { TodoList } from './TodoList/TodoList';
import './TodoApp.css'
import TodoHeader from './TodoHeader/TodoHeader';
import TodoForm from './TodoForm/TodoForm';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: []};
    this.handler = this.handler.bind(this)
  }
  handler(newItem) {
    this.setState(state => ({
        items: state.items.concat(newItem),
    }));
}
  
  render() {
    return (
      <div>
        <TodoHeader/>
        <TodoForm handler = {this.handler} itemsLength={this.state.items.length}/>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}


export default TodoApp;