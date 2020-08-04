import config from '../config';

const urlVideos = `${config.url}/videos`;

function createVideo(object) {
  return fetch(`${urlVideos}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(object),
  }).then(async (response) => {
    if (response.ok) {
      const result = await response.json();
      return result;
    }
    throw new Error('Não foi possivel obter resultado!');
  });
}

export default {
  createVideo,
};
