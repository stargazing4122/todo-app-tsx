import { createContext } from 'react';
import { Todo, TodoState } from '../interfaces/interfaces';

type TodoContextProps = {
  todosState: TodoState;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  editTodo: (todo: Todo) => void;
  toggleTodo: (id: string) => void;
};

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export default TodoContext;
