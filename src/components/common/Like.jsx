import React from 'react';

const Like = (props) => {
  let classes = 'far fa-heart';
  if (props.likeStatus) classes = 'fas fa-heartbeat text-danger';
  return <i onClick={props.onClick} className={classes}></i>;
};

export default Like;
