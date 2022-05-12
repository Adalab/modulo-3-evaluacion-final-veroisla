import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/MovieSceneDetail.scss';
import { Link } from 'react-router-dom';

function MovieSceneDetail(props) {
  return (
    <>
      <section className="movieSceneDetail__section">
        <img
          className="movieSceneDetail__img"
          alt={props.oneMovie.movie}
          title={props.oneMovie.movie}
          src={props.oneMovie.poster}
        />
        <div className="movieSceneDetail__detail">
          <h4 className="movieSceneDetail__name">{props.oneMovie.movie}</h4>
          <p className="movieSceneDetail__wow">
            <em>{props.oneMovie.full_line}</em>
          </p>{' '}
          <p className="movieSceneDetail__director">
            Director: {props.oneMovie.director}
          </p>{' '}
          <a
            className="movieSceneDetail__audio"
            href={props.oneMovie.audio}
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <i className="detail__icon fas fa-headphones movieSceneDetail__headphones"></i>{' '}
            Listen the WOW
          </a>
          <button className="movieSceneDetail__button" type="button">
            <Link to="/">Back to movies</Link>
          </button>
        </div>
      </section>
    </>
  );
}
export default MovieSceneDetail;
