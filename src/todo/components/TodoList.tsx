import React from 'react';

const TodoList = () => {
  return (
    <div>
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
          <tr>
            <td>1</td>
            <td>15646465646</td>
            <td>Learn HTML</td>
            <td className="text-center">✔️</td>
            <td className="text-center">
              <span className="edit-icon me-3">
                <i className="fas fa-edit"></i>
              </span>
              <span className="delete-icon">
                <i className="fas fa-trash-alt"></i>
              </span>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>15642646439</td>
            <td>Learn React js</td>
            <td className="text-center">❌</td>
            <td className="text-center">
              <span className="edit-icon me-3">
                <i className="fas fa-edit"></i>
              </span>
              <span className="delete-icon">
                <i className="fas fa-trash-alt"></i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
