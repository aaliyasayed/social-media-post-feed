import React from 'react';

const Like = ({favorited, favoritesCount}) => {
  return (
    <div className='likes'>
      {favorited ? <i className="fa fa-heart"></i> : <i className="fa fa-heart-o"></i>} <span>{favoritesCount}</span>
      <style>{`
        .likes {
          margin-right: 12px;
        }
      `}</style>
    </div>
  );
};

export default Like;
