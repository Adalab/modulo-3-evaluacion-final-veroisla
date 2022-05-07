import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/MovieSceneDetail.scss';

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
          <p className="movieSceneDetail__wow">{props.oneMovie.full_line}</p>
          <p className="movieSceneDetail__director">
            Director: {props.oneMovie.director}
          </p>
          <i class="fa-solid fa-volume"></i>
          <a
            className="movieSceneDetail__audio"
            href={props.oneMovie.audio}
            target="_blank"
            rel="noreferrer"
          >
            Escuchar Audio
          </a>

          <button className="movieSceneDetail__button" type="button">
            <a className="movieSceneDetail__button__href" href="/">
              Volver a listado
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
export default MovieSceneDetail;
