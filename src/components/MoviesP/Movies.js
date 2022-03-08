import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Movie from "./Movie";
import Message from "./../Common/Message";
import propTypes from "prop-types";


const Movies = ({ movies, text }) => (
  <Fragment>
    <Message text={text} />
    <div className="root">
      
        {movies.map((movie) => {
          const { id, title, poster_path, release_date } = movie;
          return (
            <Movie
              key={id}
              id={id}
              title={title}
              poster_path={poster_path}
              release_date={release_date}
            />
          );
        })}
    </div>
  </Fragment>
);

Movies.propTypes = {
  movies: propTypes.object,
  text: propTypes.string,
};
export default Movies;