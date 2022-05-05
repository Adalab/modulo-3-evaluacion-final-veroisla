//URL --> https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50

const getApiData = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie, index) => {
        return {
          poster: movie.poster,
          movie: movie.movie,
          full_line: movie.full_line,
          year: movie.year,
          director: movie.director,
          id: movie.movie + movie.current_wow_in_movie,
        };
      });
      return dataClean;
    });
};

export default getApiData;

// como elemento diferenciador podría usar movie_duration o timestamp??
