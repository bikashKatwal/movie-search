import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import loggers from 'redux-logger';
import moviesReducer from './reducers/movieReducers';

const middlewares = [thunk, loggers];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 25}) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
);

const reducers = combineReducers({
        movies: moviesReducer
    }
);

const store = createStore(reducers, enhancer);
export default store;