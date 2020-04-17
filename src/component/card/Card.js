import React, { useState, useContext } from "react";
import "./card.css";
import Grid from "@material-ui/core/Grid";

import { GlobalContext } from "../../context/Store";
import CustomModal from "../modal/CustomModal";

export default function Card(props) {
  //get the method to call the api for the selected movie
  const { getMovieDetails } = useContext(GlobalContext);

  // the modal state
  const [open, setOpen] = useState(false);

  //open the modal
  function handleOpen() {
    setOpen(true);
    console.log("open");
  }

  //close modal
  function handleClose() {
    setOpen(false);
    console.log("close");
  }

  return (
    <Grid
      container
      className="card"
      onClick={() => getMovieDetails(props.movieID)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.poster}`}
        alt="poster"
        style={{ width: "100%", position: "relative" }}
        onClick={handleOpen}
      />
      <Grid item className="card_title ">
        {props.title}
      </Grid>

      <CustomModal open={open} close={handleClose} />
    </Grid>
  );
}
