import React, { useEffect, useState, useContext } from "react";
import debounce from "lodash.debounce";
import "./cardList.css";
import Grid from "@material-ui/core/Grid";
import Card from "../card/Card";
import { GlobalContext } from "../../context/Store";

export default function CardList() {
  const { movies, getMovies } = useContext(GlobalContext);
  const [page, setPage] = useState(1);

  window.onscroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage(page + 1);
      console.log(page);
    }
  }, 100);

  useEffect(() => {
    getMovies(page);
  }, [page]);

  return (
    <Grid container>
      <Grid className="list_description" item lg={12}>
        Most popular movies
      </Grid>

      <div>
        {
          <Grid item container>
            {movies &&
              movies.map((movie) => (
                <Grid item xs={12} sm={6} md={3}>
                  <Card
                    key={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    movieID={movie.id}
                  />
                </Grid>
              ))}
          </Grid>
        }
      </div>
    </Grid>
  );
}
