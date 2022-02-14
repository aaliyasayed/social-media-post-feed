import React from 'react';
import { Link } from 'react-router-dom';
import Like from '../../components/like';
import CommentList from '../comment-list';

const Post = (props) => {
  const { author, body, favorited, favoritesCount, slug } = props;
  const { username, image, bio } = author;

  return (
    <div className='post-container d-flex flex-column justify-content-between'>
      <div className='post-container-top d-flex flex-column'>
        <Link to={`/post/${slug}`}>
          <div className='author d-flex justify-content-between'>
            <div className='d-flex'>
              <div className='user-image'><img src={image} alt='userimage' /></div>
              <div className='author-details d-flex flex-column'>
                <div className='username'>{username}</div>
                <div className='bio'>{bio || 'Crypto enthusiast'}</div>
              </div>
            </div>
            <Like favorited={favorited} favoritesCount={favoritesCount} />
          </div>
          <div className='post-body'>
            {body}
          </div>
        </Link>
      </div>
      <div className='comment-section d-flex align-items-center'>
        <CommentList slug={slug} onDemandLoad />
      </div>
    </div>
  );
}

export default Post;
