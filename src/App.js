import React, { Component } from 'react';
import Todoform from './components/Todoform';
import TodoList from './components/TodoList';
import Search from './components/search';
import uuid from 'react-uuid';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      id: uuid(),
      todo: '',
      date: '',
      searchField: '',
      editItem: false,
    };
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      todo: this.state.todo,
      date: new Date(),
      editItem: false
    };
    const updatedTodos = [...this.state.todos, newItem]
    this.setState({
      todos: updatedTodos,
      todo: '',
      id: uuid(),
      date: '',
    });
  };

  saveEdit = (e, id, value) => {
    e.preventDefault()
    const newTodo = this.state.todos.map((item) => {
      if (item.id === id) {
        item.todo = value;
        return item;
      }
      return item;
    });
    this.setState({
      todos: newTodo,
      editItem: false,
      todo: '',
    })
  }

  handleInput = e => {
    this.setState({
      todo: e.target.value
    })
  }

  handleDelete = id => {
    const filteredTodos = this.state.todos.filter((item) => item.id !== id)
    this.setState({
      todos: filteredTodos,
    })
  }

  handleEdit = id => {
    const selectedTodo = this.state.todos.find((item) => item.id === id)
    this.setState({
      todo: selectedTodo.todo,
      editItem: true,
      id,
    });
  }



  handleSearch = e => {
    this.setState({
      searchField: e.target.value,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Search />
        <Todoform
          item={this.state.todo}
          id={this.state.id}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
          saveEdit={this.saveEdit}
        />
        <TodoList todos={this.state.todos} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
      </React.Fragment>
    )
  }
}


export default App;
