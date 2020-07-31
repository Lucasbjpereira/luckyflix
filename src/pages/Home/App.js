import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Data from '../../data/dados_iniciais.json'; 

const AppWrapper = styled.div `
  background: var(--grayDark);
`;
function Home() {
  console.log(Data)
  return (
    <AppWrapper>
      <Menu/>
      <BannerMain videoTitle={Data.categorias[0].titulo} videoDescription="desc" url={Data.categorias[0].videos[0].url}></BannerMain>
      <Carousel ignoreFirstVideo category={Data.categorias[0]} />
      <Carousel ignoreFirstVideo category={Data.categorias[1]} />
      <Carousel ignoreFirstVideo category={Data.categorias[2]} />
      <Carousel ignoreFirstVideo category={Data.categorias[3]} />
      <Carousel ignoreFirstVideo category={Data.categorias[4]} />
      <Footer/>
    </AppWrapper>
  );
}

export default Home;
