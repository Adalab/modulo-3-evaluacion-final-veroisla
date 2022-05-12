import React from 'react';

import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';

import getApiData from '../services/moviesApi';
import localStorage from '../services/localStorage';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import Header from './Header';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';
import Footer from './Footer';
import Director from './Director';

function App() {
  const [dataMovie, setDataMovie] = useState(localStorage.get('movies', []));
  const [filterByName, setFilterByName] = useState(
    localStorage.get('name', '')
  );
  const [filterByYear, setFilterByYear] = useState(
    localStorage.get('year', '')
  );

  const [filterDirector, setFilterDirector] = useState(
    localStorage.get('director', '')
  );

  useEffect(() => {
    if (dataMovie.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataMovie(dataFromApi);
      });
    }
  }, []);

  useEffect(() => {
    localStorage.set('movies', dataMovie); //--> Guarda la propiedad y su valor
    localStorage.set('name', filterByName);
    localStorage.set('year', filterByYear);
    localStorage.set('director', filterDirector);
  }, [dataMovie, filterByName, filterByYear, filterDirector]); // --> Guardamelo cuando cambie el estado de la variable.

  const PreventSubmitForm = (ev) => {
    ev.preventDefault();
  };

  const handleFilterByName = (value) => {
    setFilterByName(value);
  };

  const handleFilterByYear = (value) => {
    setFilterByYear(value);
  };

  const handleFilterByDirector = (value) => {
    setFilterDirector(value);
  };

  const movieFilter = dataMovie

    .filter((director) => {
      return director.director.includes(filterDirector);
    })

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
    const onlyYear = dataMovie.map((year) => year.year);
    const uniqueYear = onlyYear.filter((eachYear, index) => {
      return onlyYear.indexOf(eachYear) === index;
    });
    return uniqueYear;
  };

  //PARA OBTENER ID DE LA URL
  const { pathname } = useLocation();
  const dataPath = matchPath('/movieSceneDetail/:id', pathname);
  const movieId = dataPath !== null ? dataPath.params.id : null;
  const movieFound = dataMovie.find((item) => item.id === movieId);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="filter__section">
                  <Filters
                    PreventSubmitForm={PreventSubmitForm}
                    handleFilterByName={handleFilterByName}
                    getYear={getYear()}
                    handleFilterByYear={handleFilterByYear}
                    filterByYear={filterByYear}
                    filterByName={filterByName}
                  />
                  <Director
                    handleFilterByDirector={handleFilterByDirector}
                    filterDirector={filterDirector}
                  />
                </div>

                <MovieSceneList dataMovie={movieFilter} />
              </>
            }
          />
          <Route
            path="/movieSceneDetail/:id"
            element={
              <>
                <MovieSceneDetail oneMovie={movieFound} />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// PreventSubmitForm={PreventSubmitForm} -> Prevenir envío form
// handlefilterByName={handlefilterByName} -> Función que recoge el valor del input
//Hago filtro de onlyYear, voy a filtrar, por cada elemento del array (eachYear) y por la posición de ese elemento (index). Return, del array de uniqueYear, dime cula es la posición de la ciudad en la que estoy, si esa ciudad es igual al índice actual, entonces devuelvemela.

//** useMatch , useLocation --> Para sacar info de la url */
