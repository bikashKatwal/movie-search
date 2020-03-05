import {FETCH_MOVIE_PENDING, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR} from './type';

const fetchMoviePending = () => ({
    type: FETCH_MOVIE_PENDING
});

const fetchMovieSuccess = json => ({
    type: FETCH_MOVIE_SUCCESS,
    payload: json
});

const fetchMovieError = error => ({
    type: FETCH_MOVIE_ERROR,
    payload: error
});

export const fetchMovie = (name) => {
    return async dispatch => {
        dispatch(fetchMoviePending());
        try {
            const url = `https://www.omdbapi.com/?s=${name}&apikey=deb36338`;
            const response = await fetch(url);
            const result = await response.json(response);
            dispatch(fetchMovieSuccess(result));
        } catch (error) {
            dispatch(fetchMovieError(error))
        }
    };
};