import React from 'react';
import TodoScreen from './todo/components/TodoScreen';
import TodoProvider from './todo/context/TodoProvider';

const TodoApp = () => {
  return (
    <div>
      <TodoProvider>
        <TodoScreen />
      </TodoProvider>
    </div>
  );
};

export default TodoApp;
