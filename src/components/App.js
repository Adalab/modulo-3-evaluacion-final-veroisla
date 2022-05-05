import React from 'react';
import '../styles/App.scss';
import getApiData from '../services/moviesApi';

import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';

function App() {
  const [dataMovie, setDataMovie] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterByYear, setFilterByYear] = useState('');

  useEffect(() => {
    console.log('hola');
    getApiData().then((dataFromApi) => {
      setDataMovie(dataFromApi);
    });
  }, []);

  //PREVENIR ENVÍO PRO DEFECTO DE FORM
  const PreventSubmitForm = (ev) => {
    ev.preventDefault();
  };

  const handleFilterByName = (value) => {
    setFilterByName(value);
  };

  const handleFilterByYear = (value) => {
    setFilterByYear(value);
  };

  const movieFilter = dataMovie

    .filter((name) => {
      return name.movie.toLowerCase().includes(filterByName.toLowerCase());
    })

    .filter((year) => {
      if (filterByYear.length === 0) {
        return true;
      } else {
        return filterByYear.includes(year.year);
      }
    });

  //Array que contiene todos los años.
  const getYear = () => {
    const onlyYear = dataMovie.map((year) => year.year); //onlyYear es mi array de todos los años.
    const uniqueYear = onlyYear.filter((eachYear, index) => {
      return onlyYear.indexOf(eachYear) === index;
    });
    return uniqueYear;
  };

  const { pathname } = useLocation();
  const dataPath = matchPath('/movieSceneDetail/:id', pathname);
  console.log(dataPath);

  const movieId = dataPath !== null ? dataPath.params.id : null;
  console.log(movieId);
  console.log(dataMovie);
  const movieFound = dataMovie.find((item) => item.id === movieId);
  console.log(movieFound);

  return (
    <div>
      <h1>Owen Wilson's "wow"</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                PreventSubmitForm={PreventSubmitForm}
                handleFilterByName={handleFilterByName}
                getYear={getYear()}
                handleFilterByYear={handleFilterByYear}
                filterByYear={filterByYear}
              />
              <MovieSceneList dataMovie={movieFilter} />
            </>
          }
        />
        <Route
          path="/movieSceneDetail/:id"
          element={<MovieSceneDetail oneMovie={movieFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;

// PreventSubmitForm={PreventSubmitForm} -> Prevenir envío form
// handlefilterByName={handlefilterByName} -> Función que recoge el valor del input
//Hago filtro de onlyYear, voy a filtrar, por cada elemento del array (eachYear) y por la posición de ese elemento (index). Return, del array de uniqueYear, dime cula es la posición de la ciudad en la que estoy, si esa ciudad es igual al índice actual, entonces devuelvemela.

//** useMatch , useLocation --> Para sacar info de la url */
