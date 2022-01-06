import React from 'react';
import useTodosContext from '../hooks/useTodosContext';

const StatisticsTodo = () => {
  const { todosState } = useTodosContext();

  return (
    <div className="row">
      <div className="col-4 text-center">
        <h2>Total todos</h2>
        <p className="fs-1">{todosState.todoCount}</p>
      </div>
      <div className="col-4 text-center">
        <h2>Completed</h2>
        <p className="fs-1">{todosState.completed}</p>
      </div>
      <div className="col-4 text-center">
        <h2>Pendings</h2>
        <p className="fs-1">{todosState.pending}</p>
      </div>
    </div>
  );
};

export default StatisticsTodo;
