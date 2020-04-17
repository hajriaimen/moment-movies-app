export default (state, action) => {
  switch (action.type) {
    // get movies Reducer
    case "GET_MOVIES":
      return {
        ...state,
        loading: false,
        movies: [...state.movies, ...action.payload],
      };

    //get movie details Reducer
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
};
