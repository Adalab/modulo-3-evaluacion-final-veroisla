//CONTIENE AMBOS COMPONENTES DE FILTRAR
import FilterByYear from './FilterByYear';
import FilterByName from './FilterByName';

function Filters(props) {
  const handleSubmitForm = (props) => {
    props.PreventSubmitForm();
  };
  return (
    <section>
      <form onSubmit={handleSubmitForm}>
        <FilterByName handleFilterByName={props.handleFilterByName} />

        <FilterByYear handleFilterByYear={props.handleFilterByYear} />
      </form>
    </section>
  );
}
export default Filters;
