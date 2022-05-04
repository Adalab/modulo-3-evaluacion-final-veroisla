import React from 'react';
import '../styles/App.scss';
import getApiData from '../services/moviesApi';

//--> RUTAS EXTERNAS
import { useEffect, useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import { matchPath, useLocation } from 'react-router';

//--> RUTAS INTERNAS
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

function App() {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataMovie(dataFromApi);
    });
  }, []);

  //PREVENIR ENVÍO PRO DEFECTO DE FORM

  const PreventSubmitForm = (ev) => {
    ev.prevent.default();
  };

  return (
    <div>
      <h1>Owen Wilson's "wow"</h1>
      <Filters PreventSubmitForm={PreventSubmitForm} />
      <MovieSceneList dataMovie={dataMovie} />
    </div>
  );
}

export default App;
