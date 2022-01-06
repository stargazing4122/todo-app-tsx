import React, { useEffect, useReducer, useState } from 'react';
import { EditionMode, Todo, TodoState } from '../interfaces/interfaces';
import TodoContext from './TodoContext';
import todoReducer from './todoReducer';
import {
  doToggleTodo,
  doAddTodo,
  doDeleteTodo,
  doEditTodo,
} from '../actions/actions';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({ children }: Props) => {
  const initTodos = (): TodoState => {
    return JSON.parse(localStorage.getItem('todos-reducer-2') as string) || [];
  };

  const [todosState, todosDispatch] = useReducer(todoReducer, [], initTodos);

  useEffect(() => {
    localStorage.setItem('todos-reducer-2', JSON.stringify(todosState));
  }, [todosState]);

  const [editionMode, setEditionMode] = useState<EditionMode>({
    state: false,
    todo: {
      id: '',
      desc: '',
      completed: false,
    },
  });

  //actions

  const addTodo = (todo: Todo) => {
    todosDispatch(doAddTodo(todo));
  };

  const deleteTodo = (id: string) => {
    todosDispatch(doDeleteTodo(id));
  };

  const editTodo = (todo: Todo) => {
    todosDispatch(doEditTodo(todo));
  };

  const toggleTodo = (id: string) => {
    todosDispatch(doToggleTodo(id));
  };

  return (
    <TodoContext.Provider
      value={{
        todosState,
        addTodo,
        deleteTodo,
        editTodo,
        toggleTodo,
        editionMode,
        setEditionMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
