import React from 'react';

const Post = (props) => {
  const { author, body, favorited, favoritesCount } = props;
  const { username, image, bio } = author;

  return (
    <>
    <div className='post-container d-flex flex-column justify-content-between'>
      <div className='post-container-top d-flex flex-column'>
        <div className='d-flex author'>
          <div className='user-image'><img src={image} alt='userimage' /></div>
          <div className='author-details d-flex flex-column'>
            <div className='username'>{username}</div>
            <div className='bio'>{bio || 'Crypto enthusiast'}</div>
          </div>
        </div>
        <div className='post-body'>
          {body}
        </div>
        <div className='post-reactions d-flex'>
          <div className='likes'>{favorited ? 'Liked' : 'Like -'} <span>{favoritesCount}</span></div>
          <span>|</span>
          <div className='comments'>Comments</div>
        </div>
      </div>
      <div className='footer d-flex align-items-center'>
        Comment here...
      </div>
      <style>{`
        .post-container {
          box-shadow: 0 3px 6px 0 rgb(0 0 0 / 17%);
          background-color: #0c0f13;
          border: 1px solid #0c0f13;
          color: #c2c2c2;
          margin-bottom: 24px;
          border-radius: 12px;
        }

        .post-container-top {
          // padding: 14px 18px;
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
          font-size: 14px;
          font-weight: 300;
          color: #989898;
        }
        .post-body {
          padding: 4px 14px;
        }
        .likes {
          margin-right: 12px;
        }
        .comments {
          margin-left: 12px;
        }
        .post-reactions {
          padding: 14px;
        }
        .footer {
          border-top: 1px solid #07080b;
          height: 64px;
          padding: 0 18px;
        }
      `}</style>
    </div>
    </>
  );
}

export default Post;
