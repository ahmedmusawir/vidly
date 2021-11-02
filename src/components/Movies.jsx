import React, { Component } from 'react';
import MoviesTable from './MoviesTable';
import Pagination from './common/Pagination';
import { paginate } from '../utils/paginate';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import FilterNav from './common/FilterNav';
import _ from 'lodash';

export class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    itemsPerPage: 4,
    selectedGenre: '',
    sortColumn: { path: 'title', order: 'asc' },
  };

  componentDidMount() {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
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

  handleSort = (sortColumn) => {
    // console.log(path);

    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { itemsPerPage, currentPage, movies, selectedGenre, sortColumn } =
      this.state;
    // Filtering by Genre from the left Nav
    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;

    // Sorting by Column Headers
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedMovies = paginate(sorted, itemsPerPage, currentPage);
    // Following is the reference for just simple pagination ...
    // const paginatedMovies = paginate(movies, itemsPerPage, currentPage);

    return { data: paginatedMovies, totalCount: filtered.length };
  };

  render() {
    const { length: count } = this.state.movies;
    const { itemsPerPage, currentPage, genres, selectedGenre, sortColumn } =
      this.state;

    if (count === 0) return <p>There are no movies in the Database.</p>;

    const { data, totalCount } = this.getPagedData();

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
          <p>Showing {totalCount} movies in the Database.</p>
          <MoviesTable
            movies={data}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />

          <Pagination
            itemsCount={totalCount}
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
