import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import Like from '../components/like';
import CommentSection from '../components/comment';
import { getPost } from '../store/feed/actions';

const PostScreen = () => {
  let { id: slug } = useParams();
  const dispatch = useDispatch();
  const { post, comments } = useSelector(state => state.Feed);

  const { author, body, favorited, favoritesCount } = post;
  const { username, image, bio, followedBy } = author;

  useEffect(() => {
    dispatch(getPost(slug));
  }, [slug]);

  return (
    <div className='post-details-container'>
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
          <CommentSection slug={slug} />
        </div>
      </div>
      <style>{`
        .post-details-container {
          margin: 38px 0;
        }
        .post-container {
          box-shadow: 0 3px 6px 0 rgb(0 0 0 / 17%);
          background-color: #0c0f13;
          border: 1px solid #0c0f13;
          color: #c2c2c2;
          margin-bottom: 24px;
          border-radius: 12px;
          text-decoration: none;
          text-align: left;
        }
        .author {
          padding: 14px;
        }
        .user-image img {
          width: 50px;
          height: 50px;
          border-radius: 100%;
        }
        .author-details {
          margin-left: 12px;
        }
        .username {
          font-size: 16px;
          font-weight: 500;
        }
        .bio {
          font-size: 12px;
          font-weight: 300;
          color: #989898;
        }
        .post-body {
          padding: 4px 14px;
        }
        .comments {
          margin-left: 12px;
        }
        .comment-section {
          border-top: 1px solid #07080b;
          min-height: 64px;
        }
      `}</style>
    </div>
  );
};

export default PostScreen;
