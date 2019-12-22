import React, { Component } from 'react'

class Todo extends Component {
    render() {
        const { todos, handleDelete, handleEdit, } = this.props

        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task</th>
                            <th scope="col">Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.length < 1 ? <h1>Nothing to show here</h1> :
                                todos.map((todo, key) =>
                                    <tr key={key}>
                                        <th scope="row">{key + 1}</th>
                                        <td>{todo.todo}</td>
                                        <td>{todo.date.toDateString()}</td>
                                        <td className="actions">
                                            <button type="button" className="btn btn-success" onClick={() => handleEdit(todo.id)}>Edit</button>
                                            <button type="button" className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Todo;