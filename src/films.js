// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let moviesFromDirector = movies.filter(movie => movie.director === director);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let totalFromDirector = movies.filter(movie => movie.director === director).reduce((counter, item) => counter + item.score, 0);

    let moviesFromDirector = movies.filter(movie => movie.director === director);
    return Number((totalFromDirector / moviesFromDirector.length).toFixed(2));

    
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let peliculas = movies.map(movie => movie)
  let peliculasOrdenadas = peliculas.sort((a, b) => {
      if (a.title > b.title) {
          return 1;
      } else if (a.title < b.title) {
          return -1;
      } else return 0;
  }).map(movie => movie.title).slice(0, 20);

  console.log('Exercice 04 Peliculas Ordenads Alfabeticamente ->', peliculasOrdenadas);

  return peliculasOrdenadas
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

  let peliculas = movies.map(movie => movie)
    let ordenadasPorYear = peliculas.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1
            } else return 0;
        }
    });

    console.log('Exercice 05 Peliculas Ordenads por año Ascendente->', ordenadasPorYear);

    return ordenadasPorYear;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(genre) {
  const peliculasPorCategoria = movies.filter(movie => movie.genre.includes(genre))

    console.log('Filtradas por categoria ->', peliculasPorCategoria);

    const totalPeliculasPorCategoria = peliculasPorCategoria.reduce((counter, item) => counter + item.score, 0);
    //console.log('Total Peliculas por categoria->',totalPeliculasPorCategoria);
    const mediaPorCategoria = Number((totalPeliculasPorCategoria / peliculasPorCategoria.length).toFixed(2))
    console.log('Media por categoria ->', mediaPorCategoria);

    return mediaPorCategoria;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const hoursToMinutes = movies.map((movie) => {
    const movieWithHoursToMinutes = {...movie};
    movieWithHoursToMinutes.duration = convertDurationToNumberOfMinutes(movie.duration);
    return movieWithHoursToMinutes;
});
console.log('Ex 07 ->',hoursToMinutes);
return hoursToMinutes;

}

const convertDurationToNumberOfMinutes = (duration) => {
const minutes = duration.split(' ').reduce((accumulator, value) => {
    let number = parseInt(value);
    if (value.includes('h')){
       number *= 60; 
    } 
    return accumulator + number;
}, 0);
return minutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
