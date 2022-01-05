import { ChangeEvent, useState } from 'react';

const useForm = <T extends Object>(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const formReset = (): void => {
    setFormValues(initialState);
  };

  return {
    formValues,
    handleChange,
    formReset,
  };
};

export default useForm;
