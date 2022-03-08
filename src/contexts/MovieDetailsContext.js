import React, { createContext, useState, useEffect } from "react";
import { movieTrailer, movieSearchDetails } from '../constants';


export const MoviesDetailsContext = createContext();

const MovieDetailsContextProvider = ({ children }) => {
  const commonmovie_id = window.location.pathname.split("/")[3];
  const [doneFetchmDetails, setdoneFetchmDetails] = useState(false);
  const [doneFetchmVideo, setdoneFetchmVideo] = useState(false);
  const [mDetails, setmDetails] = useState([]);
  const [mVideo, setmVideo] = useState([]);

  useEffect(() => getVideo(commonmovie_id), [commonmovie_id]);
  useEffect(() => getmDetails(commonmovie_id), [commonmovie_id]);


  const getVideo = (commonmovie_id) => {
    fetch(movieTrailer(commonmovie_id))
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        setdoneFetchmVideo(true);
        !Array.isArray(results.filter(x => x.site == 'YouTube')[0]) && setmVideo(results.filter(x => x.site == 'YouTube')[0]);
        
      })
      .catch((err) => console.log(err));
  };

  const getmDetails = (commonmovie_id) => {
    fetch(movieSearchDetails(commonmovie_id))
      .then((res) => res.json())
      .then((data) => {
        setdoneFetchmDetails(true);
        !Array.isArray(data) && setmDetails(data);
        

      })
      .catch((err) => console.log(err));
  }

  return (
    <MoviesDetailsContext.Provider value={{ doneFetchmVideo, doneFetchmDetails, mDetails, mVideo }}>
      {children}
    </MoviesDetailsContext.Provider>
  );
};

export default MovieDetailsContextProvider;