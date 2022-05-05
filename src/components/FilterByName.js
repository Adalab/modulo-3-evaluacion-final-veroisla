//FILTRADO POR PELÍCULA

function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleFilterByName(ev.target.value);
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

export default FilterByName;
