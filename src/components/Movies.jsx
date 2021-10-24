import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

export class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    // alert(movie.title);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    // this.setState({ movies: movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the Database.</p>;
    else
      return (
        <>
          <p>Showing {count} movies in the Database.</p>
          <table class='table'>
            <thead>
              <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Genre</th>
                <th scope='col'>Stock</th>
                <th scope='col'>Rate</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>{this.showMovies()}</tbody>
          </table>
        </>
      );
  }

  showMovies = () => {
    return this.state.movies.map((movie) => {
      return (
        <>
          <tr key={movie._id}>
            <th scope='row'>{movie.title}</th>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <button
                onClick={() => this.handleDelete(movie)}
                className='btn btn-danger'
              >
                Delete
              </button>
            </td>
          </tr>
        </>
      );
    });
  };
}

export default Movies;
