import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
  const { itemsCount, itemsPerPage, currentPage, handlePagination } = props;
  const pageCount = Math.ceil(itemsCount / itemsPerPage);
  if (pageCount === 1) return null;
  // pageCount is just a number, we need to turn it into an array to Loop
  const pagesArray = _.range(1, pageCount + 1);
  // now pagesArray has been turned into an array by lodash .range function
  // and since it is Zero based we have to add +1 to get the correct number
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        {pagesArray.map((singlePageNumber) => (
          <li
            key={singlePageNumber}
            className={
              singlePageNumber === currentPage
                ? 'page-item active'
                : 'page-item'
            }
          >
            <button
              className='page-link'
              onClick={() => handlePagination(singlePageNumber)}
            >
              {singlePageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired,
};

export default Pagination;
