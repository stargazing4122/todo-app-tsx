import React from 'react';
import StatisticsTodo from './StatisticsTodo';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoScreen = () => {
  return (
    <div className="mt-5 container">
      <h1 className="text-info">Todo App</h1>
      <StatisticsTodo />
      <hr />
      <div className="container-flex">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoScreen;
