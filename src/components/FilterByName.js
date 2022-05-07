//FILTRADO POR PELÍCULA
import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Filters.scss';

function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleFilterByName(ev.target.value);
  };

  return (
    <>
      <label className="filter__label filter__movie" htmlFor="movie">
        Movie
      </label>
      <input
        className="filter__box"
        type="text"
        placeholder=""
        value={props.filterByName}
        onChange={handleChange}
      ></input>
    </>
  );
}

export default FilterByName;
