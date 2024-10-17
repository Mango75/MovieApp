export interface iMovie{
    Title?: string;
    Year?: string;
    Rated?: string;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?:string;
    Country?: string;
    Awards?: string;
    Poster?: string;
    Metascore?:string;
    imdbRating?: string;
    imdbVotes?:string;
    imdbId?: string;
    Type?:string;
}

export interface iMovieGrid{
    movies: iMovie[]
}

export interface iCardSubHeader{
    Genre?: string;
    ImdbRating?: string;
    Metascore?: string;
    Released?: string;
    Runtime?: string;
    Year?: string;
    filterFunction?: (arg1:string)=>void;
    filterGenres?: string[];
}
export type filterType = "Genre" | "Language";

export interface iFilter{
    filterArray: string[]
    filterAction: (arg:string,arg2:filterType)=>void;
    filterValue?: string;
}
export interface iGenreBadges{
    genres?:string[],
    filteredGenres?: string[];
    onClick?: (arg1:string)=>void;
};

export interface iFilterMenuItem{
    genrefilter: iFilter;
    languagefilter: iFilter;
    resetAction: ()=> void;
}

export interface iSearchFunction{
    searchFrase: string;
    keys: SearchableKeys[],
    movieArray: iMovie[]
}
export type SearchableKeys = 'Title' | 'Plot' | 'Director' | 'Actors'; 