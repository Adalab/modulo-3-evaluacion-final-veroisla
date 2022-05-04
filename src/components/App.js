import React from 'react';
import '../styles/App.scss';

//--> SERVICIOS
import getApiData from '../services/moviesApi';

//--> RUTAS EXTERNAS
import { useEffect, useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import { matchPath, useLocation } from 'react-router';

//--> RUTAS INTERNAS (COMPONENTES)
import MovieSceneList from './MovieSceneList';

function App() {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setDataMovie(dataFromApi);
    });
  }, []);

  return (
    <div>
      <h1>Owen Wilson's "wow"</h1>
      <MovieSceneList dataMovie={dataMovie} />
    </div>
  );
}

export default App;
