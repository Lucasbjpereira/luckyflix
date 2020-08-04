import React, { useEffect, useState } from 'react';
import '../../App.css';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import CategoryRepositories from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    CategoryRepositories.getAllWithVideos().then((videoWithCategories) => {
      setData(videoWithCategories);
    }).catch((error) => console.log(error.message));
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {Data.length === 0 && (<div>Loading...</div>)}

      {Data.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain videoTitle={Data[0].videos.titulo} videoDescription="desc" url={Data[0].videos[0].url} />
              <Carousel ignoreFirstVideo category={Data[0]} />
            </div>
          );
        }

        return (
          <Carousel key={category.id} category={category} />
        );
      })}

    </PageDefault>
  );
}

export default Home;
