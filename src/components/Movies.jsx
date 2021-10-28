import React, { Component } from 'react';
import Like from './common/Like';
import Pagination from './common/Pagination';
import { getMovies } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';

export class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    itemsPerPage: 4,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    // console.log(movie);
    const movies = [...this.state.movies];
    const indx = movies.indexOf(movie);
    movies[indx] = { ...movie };
    movies[indx].like = !movies[indx].like;
    this.setState({ movies });
  };

  handlePagination = (singlePageNumber) => {
    // console.log('handling Pagination...', singlePageNumber);
    this.setState({ currentPage: singlePageNumber });
  };

  render() {
    const { length: count } = this.state.movies;
    const { itemsPerPage, currentPage, movies } = this.state;

    if (count === 0) return <p>There are no movies in the Database.</p>;

    const paginatedMovies = paginate(movies, itemsPerPage, currentPage);

    return (
      <>
        <p>Showing {count} movies in the Database.</p>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Title</th>
              <th scope='col'>Genre</th>
              <th scope='col'>Stock</th>
              <th scope='col'>Rate</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {paginatedMovies.map((movie) => (
              <tr key={movie._id}>
                <th scope='row'>{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    onClick={() => this.handleLike(movie)}
                    likeStatus={movie.like}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handlePagination={this.handlePagination}
        />
      </>
    );
  }
}

export default Movies;
