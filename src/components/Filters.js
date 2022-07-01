import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Filters.scss';

//CONTIENE AMBOS COMPONENTES DE FILTRAR

import FilterByYear from './FilterByYear';
import FilterByName from './FilterByName';

function Filters(props) {
  const handleSubmitForm = (props) => {
    props.PreventSubmitForm();
  };
  return (
    <section id="filters">
      <form onSubmit={handleSubmitForm} className="filter__section">
        <FilterByName
          handleFilterByName={props.handleFilterByName}
          filterByName={props.filterByName}
        />

        <FilterByYear
          getYear={props.getYear}
          handleFilterByYear={props.handleFilterByYear}
          filterByYear={props.filterByYear}
        />
      </form>
    </section>
  );
}
export default Filters;
