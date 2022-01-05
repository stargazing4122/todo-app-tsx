import { createContext } from 'react';
import { TodoState } from '../interfaces/interfaces';

type TodoContextProps = {
  todosState: TodoState;
};

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export default TodoContext;
