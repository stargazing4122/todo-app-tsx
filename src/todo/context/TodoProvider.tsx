import React, { useReducer } from 'react';
import { Todo, TodoState } from '../interfaces/interfaces';
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
    const todos: TodoState = {
      todoCount: 2,
      todos: [
        {
          id: new Date().getTime().toString(),
          desc: 'Learn CSS',
          completed: true,
        },
        {
          id: new Date().getTime().toString(),
          desc: 'Learn SASS',
          completed: false,
        },
      ],
      completed: 1,
      pending: 1,
    };

    return (
      JSON.parse(localStorage.getItem('todos-reducer-2') as string) || todos
    );
  };

  const [todosState, todosDispatch] = useReducer(todoReducer, [], initTodos);

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
      value={{ todosState, addTodo, deleteTodo, editTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
