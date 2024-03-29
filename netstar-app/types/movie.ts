// Type : Movie
export interface Movie {
    title : string;
    backdrop_path : string;
    media_type? : string;
    release_date? : string;
    first_air_date?: string;
    genre_ids : number[];
    id : number;
    name : string;
    origin_country : string[];
    original_language : string;
    original_name : string;
    overview : string;
    popularity : number;
    poster_path : string;
    vote_average : number;
    vote_count : number;
}

// Type : PropTypes
export interface PropsTypes {
    originals: Movie[];
    trendingNow: Movie[];
    topRated: Movie[];
    actionMovies: Movie[];
    comedyMovies: Movie[];
    horrorMovies: Movie[];
    romanceMovies: Movie[];
    documentaries: Movie[];
}

// Type : MovieCategoryType
export interface MovieCategoryType {
    title : string;
    movies : Movie[];
}

// Type : MovieDetailType
export interface MovieDetailType {
    movie : Movie;
}

// Type : Element
export interface Element {
    type :
      | 'Bloopers'
      | 'Featurette'
      | 'Behind the Scenes'
      | 'Clip'
      | 'Trailer'
      | 'Teaser'
}

// Type : Genre
export interface Genre {
    id : number;
    name : string;
}