import config from '../config';

const urlCategories = `${config.url}/categorias`;

function getAll() {
  return fetch(urlCategories).then(async (response) => {
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error('Não foi possivel obter resultado!');
  });
}

function getAllWithVideos() {
  return fetch(`${urlCategories}/?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error('Não foi possivel obter resultado!');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
