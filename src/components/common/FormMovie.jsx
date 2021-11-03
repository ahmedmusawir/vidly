import React from 'react';

const FormMovie = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form</h1>
      <h3 className='text-danger'>{match.params.id}</h3>
      <button
        className='btn btn-primary'
        onClick={() => history.push('/movies')}
      >
        Save
      </button>
    </div>
  );
};

export default FormMovie;
