import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFeed } from '../store/feed/actions';

import Post from '../components/post';
import ShimmerPost from '../components/shimmer-post';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { feeds, loading } = useSelector(state => state.Feed);

  useEffect(() => {
    dispatch(getAllFeed());
  }, []);

  return (
    <div className='post-list-main-container'>
      {loading
        ? [1,2,3].map((key) => <ShimmerPost key={key} />)
        : feeds?.articles?.map((article, key) => <Post key={key} {...article} />)
      }
    </div>
  );
}

export default HomeScreen;
