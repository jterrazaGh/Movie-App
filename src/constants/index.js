const base_url = "https://api.themoviedb.org/3/";
const api_key = "api_key=75181cb38a161d060001ab6699162e87";

const popular_movies = "discover/movie?sort_by=popularity.desc&";
const searchMovie = "search/movie?";

export const movieTrailer = commonmovie_id => `${base_url}movie/${commonmovie_id}/videos?${api_key}`;
export const movieShowPopular = () => `${base_url}${popular_movies}${api_key}`;
export const movieSearch = q_movie => `${base_url}${searchMovie}${api_key}&query=${q_movie}`;
export const movieSearchDetails = commonmovie_id => `${base_url}movie/${commonmovie_id}?${api_key}`;

/*
https://api.themoviedb.org/3/movie/634649?api_key=75181cb38a161d060001ab6699162e87
https://api.themoviedb.org/3/movie/703155/videos?api_key=75181cb38a161d060001ab6699162e87
https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=75181cb38a161d060001ab6699162e87

*/
const objeto = {
    "adult": false,
    "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    "belongs_to_collection":
    {
        "id": 531241,
        "name": "Spider-Man (Avengers) Collection",
        "poster_path": "/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg",
        "backdrop_path": "/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg"
    },
    "budget": 200000000,
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 12, "name": "Adventure" },
        { "id": 878, "name": "Science Fiction" }
    ],
    "homepage": "https://www.spidermannowayhome.movie",
    "id": 634649,
    "imdb_id": "tt10872600",
    "original_language": "en",
    "original_title": "Spider-Man: No Way Home",
    "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    "popularity": 7517.432,
    "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "production_companies": [
        {
            "id": 420,
            "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
            "name": "Marvel Studios",
            "origin_country": "US"
        },
        {
            "id": 84041,
            "logo_path": "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
            "name": "Pascal Pictures",
            "origin_country": "US"
        },
        {
            "id": 5,
            "logo_path": "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
            "name": "Columbia Pictures",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2021-12-15",
    "revenue": 1832000000,
    "runtime": 148,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        },
        {
            "english_name": "Tagalog",
            "iso_639_1": "tl",
            "name": ""
        }
    ], "status": "Released",
    "tagline": "The Multiverse unleashed.",
    "title": "Spider-Man: No Way Home",
    "video": false,
    "vote_average": 8.3,
    "vote_count": 8505
};
