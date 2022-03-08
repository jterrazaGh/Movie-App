import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchMovie = ({ validateQMovie }) => (
  <Paper className="paper defaultPaperSearch">
    <TextField
      id="q_movie"
      label="Movie"
      margin="normal"
      variant="outlined"
      onKeyPress={(e) => validateQMovie(e)}
    />
    <IconButton onClick={(e) => validateQMovie(e)}>
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default SearchMovie;