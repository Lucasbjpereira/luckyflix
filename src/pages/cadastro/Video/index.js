import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import FormFields from '../../../components/FormFields';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForms';
import VideosRepository from '../../../repositories/videos';
import CategoryRepository from '../../../repositories/categorias';

function CadastroVideos() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    CategoryRepository.getAllWithVideos().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <>
      <PageDefault>
        <h1>Cadastro de videos</h1>
        <form onSubmit={(event) => {
          event.preventDefault();

          const selectedCategory = categories.find(() => categories.titulo === values.categories);

          console.log(selectedCategory);

          VideosRepository.createVideo({
            titulo: values.titulo,
            url: values.url,
            categoriaId: 1,
          }).then(() => {
            console.log('Cadastrando com sucesso!');
          });
          history.push('/');
        }}
        >
          <FormFields
            label="Nome do vídeo: "
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormFields
            label="URL do vídeo: "
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormFields
            label="Categoria: "
            type="text"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    </>
  );
}

export default CadastroVideos;
