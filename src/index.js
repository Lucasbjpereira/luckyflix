import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideos from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

//colocar pagina 404 customizada com joguinho do mario
const Pagina404 = () => (<div>404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideos}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
