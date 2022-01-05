import { Todo } from '../interfaces/interfaces';

export type TodoAction =
  | { type: 'add'; payload: Todo }
  | { type: 'delete'; payload: { id: string } }
  | { type: 'edit'; payload: Todo }
  | { type: 'toggle'; payload: { id: string } };

export const doAddTodo = (todo: Todo): TodoAction => {
  return {
    type: 'add',
    payload: todo,
  };
};

export const doDeleteTodo = (id: string): TodoAction => {
  return {
    type: 'delete',
    payload: { id },
  };
};

export const doEditTodo = (todo: Todo): TodoAction => {
  return {
    type: 'edit',
    payload: todo,
  };
};

export const doToggleTodo = (id: string): TodoAction => {
  return {
    type: 'toggle',
    payload: { id },
  };
};
