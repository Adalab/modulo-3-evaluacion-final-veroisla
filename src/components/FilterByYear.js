function FilterByYear(props) {
  const handleChange = (ev) => {
    props.handleFilterByYear(ev.target.value);
  };
  const renderYear = () => {
    return props.getYear.map((year, index) => {
      return (
        <>
          <option key={index} value={year}>
            {year}
          </option>
        </>
      );
    });
  };

  return (
    <>
      <label htmlFor="year">Year</label>
      <select name="" id="" onChange={handleChange}>
        <option value="">All</option>
        {renderYear()}
      </select>
    </>
  );
}

export default FilterByYear;
