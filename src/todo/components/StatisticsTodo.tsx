import React from 'react';

const StatisticsTodo = () => {
  return (
    <div className="row">
      <div className="col-4 text-center">
        <h2>Total todos</h2>
        <p className="fs-1">2</p>
      </div>
      <div className="col-4 text-center">
        <h2>Completed</h2>
        <p className="fs-1">1</p>
      </div>
      <div className="col-4 text-center">
        <h2>Pendings</h2>
        <p className="fs-1">1</p>
      </div>
    </div>
  );
};

export default StatisticsTodo;
