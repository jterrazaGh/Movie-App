import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import NoImage from "./../../assets/NoImage.jpg";
import propTypes from "prop-types";

const Details = ({ mDetails, mVideo }) => {

  const { title, overview, release_date, poster_path, genres } = mDetails;

  if (mVideo) {
    const { key } = mVideo;
    const urlVideo = `'https://www.youtube.com/watch?v=${key}'`;
    return (
      <Fragment >
        <div className="detailsPaper" style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(" + `https://www.themoviedb.org/t/p/original${poster_path}` + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(0,0,0,0.8)'
        }}>
          <div width='50%'>
            <img className='ImageMovie' src={poster_path ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}` : NoImage} alt="movie" />
          </div>
          <div width='50%' className='movieDetails'>
            <h2>{`${title}(${release_date.substr(0, 4)})`}</h2>

            <h3>Genres:</h3>
            <ul className='genresList'>
              {
                genres.map((element, index) => (
                  <li key={index}>-{element.name} &nbsp;</li>
                ))
              }
            </ul>
            
            <h3>OverView</h3>
            <p>{overview}</p>
          </div>
        </div>
        <div className="detailsDivVideo">
          <div>
            <h2><strong>TRAILER</strong></h2>
            <ReactPlayer url={urlVideo} />
          </div>
        </div>
      </Fragment>

    )
  }
  else {
    return (
      <Fragment >
        <div className="detailsPaper" style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(" + `https://www.themoviedb.org/t/p/original${poster_path}` + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(0,0,0,0.8)'
        }}>
          <div width='50%'>
            <img className='ImageMovie' src={poster_path ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}` : NoImage} alt="movie" />
          </div>
          <div width='50%' className='movieDetails'>
            <h2>{`${title}(${release_date.substr(0, 4)})`}</h2>

            <h3>Genres:</h3>
            <ul className='genresList'>
              {
                genres.map((element, index) => (
                  <li key={index}>-{element.name} &nbsp;</li>
                ))
              }
            </ul>
            
            <h3>OverView</h3>
            <p>{overview}</p>
          </div>
        </div>

      </Fragment>
    )
  }

}

Details.propTypes = {
  mVideo: propTypes.object,
  mDetails: propTypes.object,
};

export default Details;