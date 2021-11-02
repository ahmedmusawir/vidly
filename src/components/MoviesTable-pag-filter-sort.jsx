import React from 'react';
import Like from './common/Like';

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort } = props;
  const pointerStyle = {
    cursor: 'pointer',
  };
  return (
    <table className='table'>
      <thead>
        <tr>
          <th onClick={() => onSort('title')} scope='col' style={pointerStyle}>
            Title
          </th>
          <th
            onClick={() => onSort('genre.name')}
            scope='col'
            style={pointerStyle}
          >
            Genre
          </th>
          <th
            onClick={() => onSort('numberInStock')}
            scope='col'
            style={pointerStyle}
          >
            Stock
          </th>
          <th
            onClick={() => onSort('dailyRentalRate')}
            scope='col'
            style={pointerStyle}
          >
            Rate
          </th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <th scope='row'>{movie.title}</th>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like onClick={() => onLike(movie)} likeStatus={movie.like} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className='btn btn-danger'
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
