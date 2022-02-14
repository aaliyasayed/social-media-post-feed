import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='not-found d-flex flex-column align-items-center justify-content-center'>
      404 | Page Not Found
      <Link to='/' className='redirect'>Home</Link>
    </div>
  );
};

export default PageNotFound;
