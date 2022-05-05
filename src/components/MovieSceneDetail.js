//MÁS INFO DE LA PELI

function MovieSceneDetail(props) {
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
      <p>{props.oneMovie.audio}</p>
    </>
  );
}
export default MovieSceneDetail;
