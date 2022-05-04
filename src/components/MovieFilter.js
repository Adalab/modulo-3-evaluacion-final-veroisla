//FILTRADO POR PELÍCULA

function MovieFilter(props) {
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <>
      <label htmlFor="movie">Movie</label>
      <input
        type="text"
        placeholder=""
        value={props.filterMovie}
        onChange={handleChange}
      ></input>
    </>
  );
}

export default MovieFilter;
