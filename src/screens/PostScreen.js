import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import Like from '../components/like';
import CommentList from '../components/comment-list';
import { getPost } from '../store/feed/actions';
import ShimmerPost from '../components/shimmer-post';

const PostScreen = () => {
  let { id: slug } = useParams();
  const dispatch = useDispatch();
  const { post, loading } = useSelector(state => state.Feed);

  const { author, body, favorited, favoritesCount } = post;
  const { username, image, bio, followedBy } = author;

  useEffect(() => {
    dispatch(getPost(slug));
  }, [slug]);

  return (
    loading
      ? <div className='mt-5'><ShimmerPost /></div>
      : <div className='post-details-container'>
          <div className='post-container d-flex flex-column justify-content-between'>
            <div className='post-container-top d-flex flex-column'>
              <div className='author d-flex justify-content-between'>
                <div className='d-flex'>
                  <div className='user-image'><img src={image} alt='userimage' /></div>
                  <div className='author-details d-flex flex-column'>
                    <div className='username'>{username}</div>
                    <div className='bio'>{bio || 'Crypto enthusiast'} {(followedBy?.length && `| ${followedBy?.length} Followers`)}</div>
                  </div>
                </div>
                <Like favorited={favorited} favoritesCount={favoritesCount} />
              </div>
              <div className='post-body'>
                {body}
              </div>
            </div>
            <div className='comment-section d-flex align-items-center'>
              <CommentList slug={slug} />
            </div>
          </div>
        </div>
  );
};

export default PostScreen;
