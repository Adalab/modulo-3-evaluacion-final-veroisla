//PINTAMOS CADA UNA DE LAS PELÍCULAS, contenido del <li>
import '../styles/MovieSceneItem.scss';
import { Link } from 'react-router-dom';

function MovieSceneItem(props) {
  return (
    <Link to={`/movieSceneDetail/${props.oneMovie.id}`}>
      <img
        className="movieSceneItem__image"
        alt={props.oneMovie.movie}
        title={props.oneMovie.movie}
        src={props.oneMovie.poster}
      />
      <h4>{props.oneMovie.movie}</h4>
      <p>{props.oneMovie.year}</p>
      <p>{props.oneMovie.full_line}</p>
    </Link>
  );
}

export default MovieSceneItem;

//Recojo la props que me manda MovieSceneList, oneMovie, que contiene cada una de las películas de la lista. Y en cada etiqueta pongo lo necesario.
