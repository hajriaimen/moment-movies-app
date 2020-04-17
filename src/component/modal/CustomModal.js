import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import "./Modal.css";

import { GlobalContext } from "../../context/Store";
import { Grid, Box } from "@material-ui/core";

export default function CustomModal(props) {
  //get the details of the selected movie
  const { details } = useContext(GlobalContext);

  return (
    <Modal className="modal" id="modal" open={props.open} onClose={props.close}>
      <Box className="box">
        <Grid container>
          <Grid className="modal-poster" item direction="column" md={4}>
            <img
              src={`https://image.tmdb.org/t/p/w220_and_h330_face/${details.poster_path}`}
              alt="poster"
              width={"100%"}
              height={"100%"}
            />
          </Grid>

          <Grid item direction="row" md={8}>
            <Grid className="modal_title" item md={12}>
              {details.title}
            </Grid>

            <Grid className="overview" item md={12}>
              {details.overview}
            </Grid>

            <Grid className="details" container md={12}>
              <Grid item md={5} className="item">
                <div className="items-font">release date :</div>
                <div>{details.release_date}</div>
              </Grid>

              <Grid item md={3} className="item">
                <div className="items-font">Duration :</div>
                <div>{details.runtime}</div>
              </Grid>

              <Grid className="item" item md={3}>
                <div className="items-font">Vote :</div>
                <div>{details.vote_average}</div>
              </Grid>

              <Grid item md={12} className="item">
                <div className="items-font">Genre :</div>
                <div>
                  {details.genres &&
                    details.genres.map((el, key) => el.name + ", ")}
                </div>
              </Grid>

              <Grid item className="item" md={12}>
                <div className="items-font"> Country :</div>
                <div>
                  {details.production_countries &&
                    details.production_countries.map(
                      (el, key) => el.name + ", "
                    )}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
