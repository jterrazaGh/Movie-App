import React, { createContext, useState, useEffect } from 'react';
import { movieShowPopular, movieSearch } from '../constants';

export const MoviesContext = createContext();

const MovieContextProvider = ({ children }) => {

    const [doneFetch, setDoneFetch] = useState();
    const [currentQMovie, setCurrentQMovie] = useState("");
    const [text, setText] = useState("Popular Movies");
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        getPopularMovie();
    }, []);


    const getPopularMovie = () => {
        fetch(movieShowPopular())
            .then((res) => res.json())
            .then((data) => {
                setDoneFetch(true);
                //console.log(data.results);
                setMovies(data.results);

            })
            .catch((err) => console.log(err));
    };

    const getMovies = (q_movie) => {
        fetch(movieSearch(q_movie))
            .then(res => res.json())
            .then(data => {
                const { results } = data;
                setDoneFetch(true);
                //console.log(`${results} busqueda`);
                setText(results.length ? "Results" : "No Results");
                setMovies(results);
            })
            .catch((err) => console.log(err));

    };

    const validateQMovie = (
        e,
        q_movie = document.querySelector("#q_movie").value.toLowerCase().trim()
    ) => {
        if (e.type === "keypress" && e.key !== "Enter") return;
        const words = q_movie.match(/\w+/g);
        q_movie = words && words.join(" ");
        if (q_movie && q_movie !== currentQMovie) {
            setCurrentQMovie(q_movie);
            setDoneFetch(false);
            getMovies(q_movie);
        }
    };

    return (
        <MoviesContext.Provider value={{ validateQMovie, doneFetch, text, movies }}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MovieContextProvider;
