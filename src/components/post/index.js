import React from 'react';
import { Link } from 'react-router-dom';
import Like from '../../components/like';
import CommentSection from '../comment';

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
        <CommentSection slug={slug} onDemandLoad />
      </div>
      <style>{`
        a, a:hover, a:visited {
          text-decoration: none;
          color: #c2c2c2;
          text-align: left;
        }
        .post-container {
          box-shadow: 0 3px 6px 0 rgb(0 0 0 / 17%);
          background-color: #0c0f13;
          border: 1px solid #0c0f13;
          color: #c2c2c2;
          margin-bottom: 24px;
          border-radius: 12px;
          text-decoration: none;
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
          padding: 0 14px 14px ;
        }
        .likes {
          margin-right: 12px;
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
}

export default Post;
