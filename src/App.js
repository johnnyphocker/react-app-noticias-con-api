import React, { Component } from 'react';
import './App.css';

import Header from './componentes/header';
import Noticias from './componentes/noticias';
import Formulario from './componentes/formulario';

class App extends Component {

  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = 'general') => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=af124b118bdd4e8cab7e32a8dc9b11ab`;

    fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({
          noticias: data.articles
        });
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header titulo="Noticias" />
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <Noticias
            noticias={this.state.noticias}
          />
        </div>
      </div>
    );
  }
}

export default App;
