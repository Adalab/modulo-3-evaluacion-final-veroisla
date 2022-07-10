//LISTADO DE PELÍCULAS, (aquí pintamos las pelis)
import MovieSceneItem from './MovieSceneItem';
import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/MovieSceneList.scss';

function MovieSceneList(props) {
  if (props.dataMovie.length === 0) {
    return (
      <p className="movieSceneList__alert">
        Uuups, we can´t find what you are looking for, try again!
      </p>
    );
  } else {
    const movieElements = props.dataMovie.map((oneMovie, index) => {
      return (
        <li className="movieSceneList__poster" key={index}>
          <MovieSceneItem oneMovie={oneMovie} />
        </li>
      );
    });
    return (
      <section>
        <ul className="movieSceneList__list">{movieElements}</ul>
      </section>
    );
  }
}

export default MovieSceneList;

// Recojo dataMovie (contiene todas las películas) a través de props, y transformo ese array en un array de <li>. Ese <li> va a tener como contenido el componente MovieSceneItem.
// oneMovie representa cada una de las películas de la lista
