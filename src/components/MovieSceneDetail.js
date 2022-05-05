//MÁS INFO DE LA PELI

function MovieSceneDetail(props) {
  const handleClick = (ev) => {
    props.getBack();
  };

  return (
    <>
      <img
        className="movieSceneItem__image"
        alt={props.oneMovie.movie}
        title={props.oneMovie.movie}
        src={props.oneMovie.poster}
      />
      <h4>{props.oneMovie.movie}</h4>
      <p>{props.oneMovie.full_line}</p>
      <p>Director: {props.oneMovie.director}</p>
      <a href={props.oneMovie.audio} target="_blank" rel="noreferrer">
        Escuchar Audio
      </a>

      <button type="button" onClick={handleClick}>
        <a href="/">Volver a listado</a>
      </button>
    </>
  );
}
export default MovieSceneDetail;
