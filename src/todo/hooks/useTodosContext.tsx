import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const useTodosContext = () => {
  const { todosState, addTodo, deleteTodo, editTodo, toggleTodo } =
    useContext(TodoContext);

  return {
    todosState,
    addTodo,
    deleteTodo,
    editTodo,
    toggleTodo,
  };
};

export default useTodosContext;
