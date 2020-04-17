// api call method to get movies
export async function getMoviesList(page) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=e974227515d332f0a09b3065b402c21a&language=en-US&page=${page}`
    ).then((res) => res.json());
    return res.results;
  } catch (err) {
    console.log(err);
  }
}

// api call method for movie details
export async function getMovie(id) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e974227515d332f0a09b3065b402c21a&language=en-US`
    ).then((res) => res.json());
    return res;
  } catch (err) {
    console.log(err);
  }
}
