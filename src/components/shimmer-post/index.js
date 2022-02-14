import React from 'react';

const ShimmerPost = () => {
  return (
    <div className='post-shimmer-container br'>
      <div className='wrapper'>
        <div className='d-flex w100 mb-4'>
          <div className='profilePic animate din mr-3'></div>
          <div className='d-flex flex-column w80'>
            <div className='br animate w30 h8 mt-10 mb-14'></div>
            <div className='br animate w30 h8'></div>
          </div>
        </div>
        <div className='br animate w80 h8 mb-3'></div>
        <div className='body br animate h8'></div>
      </div>
    </div>
  )
};

export default ShimmerPost;
