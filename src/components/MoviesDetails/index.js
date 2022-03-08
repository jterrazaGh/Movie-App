import React, { Fragment, useContext } from "react";
import { MoviesDetailsContext } from "./../../contexts/MovieDetailsContext";
import ProgressBar from "./../Common/ProgressBar";
import Message from "./../Common/Message";
import ButtonPrimary from "./../Common/ButtonPrimary";
import Details from "./details";
import propTypes from "prop-types";

const MoviesDetails = () => {
  const { doneFetchmVideo, doneFetchmDetails, mDetails, mVideo } = useContext(MoviesDetailsContext);
  return (
    <Fragment>
      {
        
        doneFetchmDetails && doneFetchmVideo ?
          (!Array.isArray(mDetails) && !Array.isArray(mVideo) ?
            <Details mDetails={mDetails} mVideo={mVideo} />
            :
            <Message text="No Results" />)
          :
          <ProgressBar />
      }
      <ButtonPrimary type="back" to="/" />
    </Fragment>
  )
};

MoviesDetails.propTypes = {
  doneFetchmVideo: propTypes.bool,
  doneFetchmDetails: propTypes.bool,
  mDetails: propTypes.object,
  mVideo: propTypes.object,

};

export default MoviesDetails;