import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const useTodosContext = () => {
  const {
    todosState,
    addTodo,
    deleteTodo,
    editTodo,
    toggleTodo,
    editionMode,
    setEditionMode,
  } = useContext(TodoContext);

  return {
    todosState,
    addTodo,
    deleteTodo,
    editTodo,
    toggleTodo,
    editionMode,
    setEditionMode,
  };
};

export default useTodosContext;
