import Like from './common/Like';
import React, { Component } from 'react';
import TableHeader from './common/TableHeader';
import TableBody from './common/TableBody';

export class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label: 'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    {
      key: 'like',
      content: (movie) => (
        <Like
          onClick={() => this.props.onLike(movie)}
          likeStatus={movie.like}
        />
      ),
    },
    {
      key: 'delete',
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className='btn btn-danger'
        >
          Remove
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <table className='table'>
        <TableHeader
          columns={this.columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />

        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
