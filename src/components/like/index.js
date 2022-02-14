import React from 'react';

const Like = ({favorited, favoritesCount}) => {
  return (
    <div className='likes'>
      {favorited ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>} <span>{favoritesCount}</span>
    </div>
  );
};

export default Like;
