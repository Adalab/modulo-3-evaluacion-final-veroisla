import data from '../services/directorApi.json';

function Director(props) {
  const handleClick = (ev) => {
    ev.preventDefault();
    props.handleFilterByDirector(ev.target.value);
  };
  const renderDirector = () => {
    return data.map((director, index) => {
      return <option key={index}>{director}</option>;
    });
  };

  return (
    <>
      <label className="filter__label " htmlFor="director">
        Director
      </label>
      <select
        className="filter__box filter__checkbox"
        name="director"
        onChange={handleClick}
        value={props.filterDirector}
      >
        <option className="filter__box" value="">
          All
        </option>
        {renderDirector()}
      </select>
    </>
  );
}

export default Director;
