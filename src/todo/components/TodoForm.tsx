import React, { FormEvent } from 'react';
import useForm from '../hooks/useForm';
import useTodosContext from '../hooks/useTodosContext';
import { EditionMode, Todo } from '../interfaces/interfaces';

interface FormData {
  description: string;
}
const TodoForm = () => {
  const { addTodo, editTodo, editionMode, setEditionMode } = useTodosContext();

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

  const handleEditTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.trim().length > 2) {
      const todoEdited: Todo = {
        ...editionMode.todo,
        desc: description,
      };
      editTodo(todoEdited);
      formReset();
      setEditionMode({
        state: false,
        todo: {
          id: '',
          desc: '',
          completed: false,
        },
      } as EditionMode);
    }
  };

  return (
    <div>
      <h2>{!editionMode.state ? 'Add a Todo' : 'Editing'}</h2>
      <form onSubmit={!editionMode.state ? handleAddTodo : handleEditTodo}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder={
            !editionMode.state ? 'Input a todo' : editionMode.todo.desc
          }
          autoComplete="off"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <button
          className={
            !editionMode.state
              ? 'btn btn-outline-success'
              : 'btn btn-outline-info'
          }
          type="submit"
          disabled={description.trim().length <= 2}
        >
          {!editionMode.state ? 'Add' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
