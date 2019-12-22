import React, { Component } from 'react'
import './Todo.css';



class Todo extends Component {
    render() {
        const { item, handleInput, handleSubmit, editItem, saveEdit, id } = this.props;
        return (
            <form className="container" onSubmit={!editItem ? handleSubmit : (e) => saveEdit(e, id, item)}>
                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Todo...." onChange={handleInput} value={item} />
                {!editItem ? <button
                    type="submit"
                    className="btn btn-success"
                    onClick={this.handleSubmit}>
                    Add Task
                </button> : <button onSubmit={() => saveEdit(id, item)}>Edit Item</button>}
            </form>
        )
    }
}

export default Todo;