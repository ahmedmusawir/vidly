import React, { Component } from 'react';
import MoviesTable from './MoviesTable';
import Pagination from './common/Pagination';
import { paginate } from '../utils/paginate';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import FilterNav from './common/FilterNav';

export class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    itemsPerPage: 4,
    selectedGenre: '',
  };

  componentDidMount() {
    const genres = [{ name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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

  handleGenreSelect = (genre) => {
    // console.log(genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const { itemsPerPage, currentPage, movies, genres, selectedGenre } =
      this.state;

    if (count === 0) return <p>There are no movies in the Database.</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;

    const paginatedMovies = paginate(filtered, itemsPerPage, currentPage);
    // Following is the reference for just simple pagination ...
    // const paginatedMovies = paginate(movies, itemsPerPage, currentPage);

    return (
      <section className='row'>
        <div className='col-3'>
          <FilterNav
            items={genres}
            selectedItem={selectedGenre}
            onGenreSelect={this.handleGenreSelect}
          />
        </div>
        <div className='col'>
          <p>Showing {filtered.length} movies in the Database.</p>
          <MoviesTable
            movies={paginatedMovies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />

          <Pagination
            itemsCount={filtered.length}
            // itemsCount={count} -- used for basic pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            handlePagination={this.handlePagination}
          />
        </div>
      </section>
    );
  }
}

export default Movies;
