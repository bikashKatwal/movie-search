import React, {Component} from 'react';

import "./App.css";
import {connect} from 'react-redux'
import Card from "./components/Card";
import InputField from "./components/Input";
import Loader from "./components/Loader";
import {fetchMovie} from "./store/actions/movieAction";


class App extends Component {
    state = {
        searchInput: 'The Rain',
    };

    componentDidMount() {
        this.props.getMoviesList(this.state.searchInput);
    }

    _getMovie = () => {
        this.props.getMoviesList(this.state.searchInput);
    };

    _onChangeHandler = (e) => {
        this.setState({
            searchInput: e.target.value
        });
    };

    getAlldata = () => {
        const {Search} = this.props.movies.data;
        if (Search) {
            return Search.map((item) => {
                return <Card
                    key={item.imdbID}
                    image={item.Poster}
                    name={item.Title}
                    year={item.Year}
                />
            });
        }
    };


    render() {
        const {loading} = this.props.movies;

        return (
            <div className="App">
                <div className="center">
                    <div>
                        <div className="center white-text">Movie Search</div>
                    </div>
                </div>

                <div className="container">
                    <InputField value={this.state.searchInput} onChange={this._onChangeHandler}
                                onClick={this._getMovie}/>

                    <div className="row">
                        {loading ?
                            <Loader/> : this.getAlldata()
                        }
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getMoviesList: (name) => dispatch(fetchMovie(name)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
