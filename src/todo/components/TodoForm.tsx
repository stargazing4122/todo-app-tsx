import React from 'react';

const TodoForm = () => {
  return (
    <div>
      <h2>Add a Todo</h2>
      <form>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Input a todo"
          autoComplete="off"
          name="todoName"
        />
        <button className="btn btn-outline-success" type="button">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
