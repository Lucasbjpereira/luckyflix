import { useState } from 'react';

function useForm(categoryValues) {
  const [values, setValues] = useState(categoryValues);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(categoryValues);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}

export default useForm;
