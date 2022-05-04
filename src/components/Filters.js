//CONTIENE AMBOS COMPONENTES DE FILTRAR
import MovieFilter from './MovieFilter';

function Filters(props) {
  const handleSubmitForm = (props) => {
    props.PreventSubmitForm();
  };
  return (
    <section>
      <form onSubmit={handleSubmitForm}>
        <MovieFilter />
      </form>
    </section>
  );
}
export default Filters;
