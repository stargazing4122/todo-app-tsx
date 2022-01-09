import React from 'react';
import useTodosContext from '../hooks/useTodosContext';
import { EditionMode, Todo } from '../interfaces/interfaces';

const TodoList = () => {
  const { todosState, deleteTodo, toggleTodo, setEditionMode } =
    useTodosContext();

  const handleDeleteTodo = (id: string): void => {
    deleteTodo(id);
  };

  const handleToggleTodo = (id: string): void => {
    toggleTodo(id);
  };

  const handleSetEditionMode = (todo: Todo): void => {
    setEditionMode({
      state: true,
      todo: {
        ...todo,
      },
    } as EditionMode);
  };

  return (
    <div className="flex_item">
      <div className="todos_list">
        <table className="table table-striped table-primary">
          <thead>
            <tr>
              <th>N°</th>
              <th>ID</th>
              <th>Todo</th>
              <th className="text-center">State</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todosState.todos.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.id}</td>
                <td>{todo.desc}</td>
                <td className="text-center">{todo.completed ? '✔️' : '❌'}</td>
                <td className="text-center">
                  <span
                    className="toggle-icon me-3"
                    onClick={() => handleToggleTodo(todo.id)}
                  >
                    <i className="fas fa-exchange-alt"></i>
                  </span>
                  <span
                    className="edit-icon me-3"
                    onClick={() => handleSetEditionMode(todo)}
                  >
                    <i className="fas fa-edit"></i>
                  </span>
                  <span
                    className="delete-icon"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
