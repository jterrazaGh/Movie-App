import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonPrimary from "./../Common/ButtonPrimary";
import NoImage from "./../../assets/NoImage.jpg";

const Movie = ({ id, title, poster_path, release_date }) => (
  <div>
    <Paper className="defaultPaper">
      <h3>{title.length >24 ? `${title.substring(0, 22)}...`:title}</h3>
      <ul>
        <li>
          <img src={ poster_path ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`: NoImage} alt="movie" />
          <br></br>
          <strong>Date: </strong>
          <span>{release_date}</span>
        </li>
        <li>
          <ButtonPrimary type="movies" to={`/MoviesDetails/Movie/${id}`} />
        </li>
      </ul>
    </Paper>
  </div>
);

export default Movie;
