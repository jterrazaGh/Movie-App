import React, { Fragment, useContext } from 'react';
import { MoviesContext } from '../../contexts/MovieContext';
import SearchMovie from './SearchMovie';
import Movies from './Movies';
import ProgressBar from '../Common/ProgressBar';
import Message from '../Common/Message';

const MoviesP = () => {
    const { validateQMovie, doneFetch, text, movies } = useContext(MoviesContext);

    return (
        <Fragment>
            <SearchMovie validateQMovie={validateQMovie} />
            {
                doneFetch ?
                    (movies.length ? <Movies text={text} movies={movies} /> : <Message text={text} />)
                    :
                    (<ProgressBar />)
            }
        </Fragment>


    )
};

export default MoviesP;
