import React from 'react';

const Input = ({ name, value, label, placeholder, error, auto, onChange }) => {
  return (
    <div className='form-group'>
      <label htmlFor='userName'>{label}</label>
      <input
        autoFocus={auto}
        type='text'
        className='form-control'
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Input;
