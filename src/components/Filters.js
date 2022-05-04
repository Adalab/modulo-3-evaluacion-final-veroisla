//CONTIENE AMBOS COMPONENTES DE FILTRAR
import YearFilter from './YearFilter';
import MovieFilter from './MovieFilter';

function Filters(props) {
  const handleSubmitForm = (props) => {
    props.PreventSubmitForm();
  };
  return (
    <section>
      <form onSubmit={handleSubmitForm}>
        <MovieFilter handleFilterMovie={props.handleFilterMovie} />

        <YearFilter />
      </form>
    </section>
  );
}
export default Filters;
