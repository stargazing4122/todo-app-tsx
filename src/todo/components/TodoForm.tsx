import React, { FormEvent } from 'react';
import useForm from '../hooks/useForm';
import useTodosContext from '../hooks/useTodosContext';
import { Todo } from '../interfaces/interfaces';

interface FormData {
  description: string;
}
const TodoForm = () => {
  const { addTodo } = useTodosContext();

  const { formValues, handleChange, formReset } = useForm<FormData>({
    description: '',
  });

  const { description } = formValues;

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.trim().length > 2) {
      const newTodo: Todo = {
        id: new Date().getTime().toString(),
        desc: description,
        completed: false,
      };
      addTodo(newTodo);
      formReset();
    }
  };

  return (
    <div>
      <h2>Add a Todo</h2>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Input a todo"
          autoComplete="off"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
