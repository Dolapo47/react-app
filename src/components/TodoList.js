import React, { Component } from 'react'
import Todo from './todo';
import './Todo.css';

class TodoList extends Component {
  render() {
    const { todos, handleDelete, handleEdit, editItem } = this.props;
    return (
      <React.Fragment>

        <Todo todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} isEdit={editItem} />

      </React.Fragment>
    )
  }
}

export default TodoList;