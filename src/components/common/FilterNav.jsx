import React from 'react';
import PropTypes from 'prop-types';

const FilterNav = (props) => {
  const { items, selectedItem, textProperty, valueProperty, onFilter } = props;
  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? 'list-group-item active' : 'list-group-item'
          }
          style={{ cursor: 'pointer' }}
          onClick={() => onFilter(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

FilterNav.propTypes = {
  textProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
};

FilterNav.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default FilterNav;
