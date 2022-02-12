import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFeedPosts } from '../../store/feed/actions';
import { authenticateUser } from '../../store/auth/actions';

const App = () => {
  const dispatch = useDispatch();
  const feed = useSelector(state => state.Feed);
  const user = useSelector(state => state.Auth);

  useEffect(() => {
    dispatch(getAllFeedPosts());
    dispatch(authenticateUser());
  }, []);

  console.log({feed, user});
  return (
    <div>APP COMPONENT</div>
  )
};

export default App;
