//PINTAMOS CADA UNA DE LAS PELÍCULAS, contenido del <li>
import { Link } from 'react-router-dom';
import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/MovieSceneItem.scss';

function MovieSceneItem(props) {
  return (
    <Link to={`/movieSceneDetail/${props.oneMovie.id}`}>
      <div className="movieSceneItem">
        <img
          className="movieSceneItem__img"
          alt={props.oneMovie.movie}
          title={props.oneMovie.movie}
          src={props.oneMovie.poster}
        />
        <div className="movieSceneItem__movieYear">
          <h4 className="movieSceneItem__name">{props.oneMovie.movie}</h4>
          <span className="movieSceneItem__span">-</span>
          <p className="movieSceneItem__name">{props.oneMovie.year}</p>
        </div>

        <p>{props.oneMovie.full_line}</p>
      </div>
    </Link>
  );
}

export default MovieSceneItem;

//Recojo la props que me manda MovieSceneList, oneMovie, que contiene cada una de las películas de la lista. Y en cada etiqueta pongo lo necesario.
