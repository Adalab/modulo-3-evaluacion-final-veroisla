function FilterByYear(props) {
  const handleClick = (ev) => {
    props.handleFilterByYear();
  };
  return (
    <>
      <label htmlFor="">Year</label>
      <select name="" id="" onClick={handleClick}>
        <option value="">All</option>
      </select>
    </>
  );
}
export default FilterByYear;
