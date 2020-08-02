import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormFields from '../../../components/FormFields';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategoria] = useState([]);

  const categoryValues = {
    name: '',
    description: '',
    color: '',
  };

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

  useEffect(() => {
    const url = 'http://localhost:8080/categoria';

    fetch(url).then(async (response) => {
      const result = await response.json();
      setCategoria(result);
    });
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro da Categoria:
          {values.name}
        </h1>
        <form onSubmit={function disparaSubmit(event) {
          event.preventDefault();
          setCategoria([
            ...categorias,
            values,
          ]);

          setValues(categoryValues);
        }}
        >

          <FormFields
            label="Nome da Categoria: "
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />

          <FormFields
            as="textarea"
            label="Descrição da Categoria:"
            name="description"
            value={values.description}
            onChange={handleChange}
          />

          <FormFields
            label="Cor:"
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
          />

          <Button className="ButtonLink">
            Cadastrar
          </Button>

          {categorias.length === 0 && (
          <div>
            {/* Carregando */}
            Loading...
          </div>
          )}

        </form>

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.name}`}>
              {categoria.name}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
