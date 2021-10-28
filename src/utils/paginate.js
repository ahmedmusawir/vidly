import _ from 'lodash';

export function paginate(items, itemsPerPage, pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;

  return _(items).slice(startIndex).take(itemsPerPage).value();
  // _.slice(items, startIndex);
  // _.take();
}
