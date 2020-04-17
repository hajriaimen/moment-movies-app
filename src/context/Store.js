import React, { createContext, useReducer } from "react";
import AppReducer from "./Reducers";
import { getMoviesList, getMovie } from "../utils/api";

//initial state
const initialState = {
  movies: [],
  details: {},
};

// create context

export const GlobalContext = createContext(initialState);

//provider ccomponent

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  async function getMovies(page) {
    try {
      const res = await getMoviesList(page);

      dispatch({
        type: "GET_MOVIES",
        payload: res,
      });
    } catch (err) {
      dispatch({
        type: "TRANSCATIONS_ERROR",
        payload: err,
      });
    }
  }

  // get selected movie details Action
  async function getMovieDetails(id) {
    try {
      const res = await getMovie(id);
      dispatch({
        type: "GET_MOVIE_DETAILS",
        payload: res,
      });
    } catch (err) {
      dispatch({
        type: "TRANSCATIONS_ERROR",
        payload: err,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        movies: state.movies,
        details: state.details,
        error: state.error,
        loading: state.error,
        getMovieDetails,
        getMovies,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
