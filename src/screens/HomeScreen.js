import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFeedPosts } from '../store/feed/actions';

import Post from '../components/post';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const feed = useSelector(state => state.Feed);

  useEffect(() => {
    dispatch(getAllFeedPosts());
  }, []);

  return (
    <div className='post-list-main-container'>
      {feed.articles.map((article, key) => <Post key={key} {...article} />)}
    </div>
  );
}

export default HomeScreen;
