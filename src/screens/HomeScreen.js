import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFeed } from '../store/feed/actions';

import Post from '../components/post';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const feeds = useSelector(state => state.Feed.feeds);

  useEffect(() => {
    dispatch(getAllFeed());
  }, []);

  return (
    <div className='post-list-main-container'>
      {feeds?.articles?.map((article, key) => <Post key={key} {...article} />)}
    </div>
  );
}

export default HomeScreen;
