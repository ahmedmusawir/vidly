import React from 'react';
import PropTypes from 'prop-types';

const Like = (props) => {
  let classes = 'far fa-heart';
  if (props.likeStatus) classes = 'fas fa-heartbeat text-danger';
  return <i onClick={props.onClick} className={classes}></i>;
};

Like.propTypes = {
  likeStatus: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Like;
