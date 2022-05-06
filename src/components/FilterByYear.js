import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Filters.scss';

function FilterByYear(props) {
  const handleChange = (ev) => {
    props.handleFilterByYear(ev.target.value);
  };
  const renderYear = () => {
    return props.getYear.map((year, index) => {
      return (
        <option className="filter__box" value={year} key={index}>
          {year}
        </option>
      );
    });
  };

  return (
    <>
      <label className="filter__Label" htmlFor="year">
        Year
      </label>
      <select
        className="filter__box"
        name="year"
        onChange={handleChange}
        value={props.filterByYear}
      >
        <option className="filter__box" value="">
          All
        </option>
        {renderYear()}
      </select>
    </>
  );
}

export default FilterByYear;
