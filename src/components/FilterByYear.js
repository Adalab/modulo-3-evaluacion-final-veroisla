function FilterByYear(props) {
  const handleChange = (ev) => {
    props.handleFilterByYear(ev.target.value);
  };
  const renderYear = () => {
    return props.getYear.map((year) => {
      return <option value={year}>{year}</option>;
    });
  };

  return (
    <>
      <label htmlFor="year">Year</label>
      <select name="year" onChange={handleChange} value={props.filterByYear}>
        <option value="">All</option>
        {renderYear()}
      </select>
    </>
  );
}

export default FilterByYear;
