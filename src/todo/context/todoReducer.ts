import { TodoState } from '../interfaces/interfaces';
import { TodoAction } from '../actions/actions';

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        todoCount: state.todoCount + 1,
        todos: [...state.todos, action.payload],
        pending: state.pending + 1,
      };

    case 'delete':
      const newTodoList1 = state.todos.filter(
        (todo) => todo.id !== action.payload.id,
      );
      return {
        ...state,
        todos: newTodoList1,
        completed: newTodoList1.filter((todo) => todo.completed === true)
          .length,
        pending: newTodoList1.filter((todo) => todo.completed === false).length,
        todoCount: newTodoList1.length,
      };

    case 'edit':
      const newTodoList2 = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
      return {
        ...state,
        todos: newTodoList2,
      };

    case 'toggle':
      const newTodoList3 = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
      return {
        ...state,
        todos: newTodoList3,
        completed: newTodoList3.filter((todo) => todo.completed === true)
          .length,
        pending: newTodoList3.filter((todo) => todo.completed === false).length,
      };

    default:
      return state;
  }
};

export default todoReducer;
