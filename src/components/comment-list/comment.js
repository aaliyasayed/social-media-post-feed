import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../store/feed/actions';

const Comment = (props) => {
  const dispatch = new useDispatch();
  const { isLoggedIn, user } = useSelector(state => state.Auth);
  const { id, author, body, slug} = props;
  const { username, image } = author;
  const showDeleteButton = isLoggedIn ? user.username === username : false;

  const deleteUserComment = () => {
    dispatch(deleteComment({slug, id}));
  };

  return (
    <div className='comment d-flex justify-content-between'>
      <div className='d-flex'>
        <div className='user-comment-avatar'>
          <img src={image} alt='Avatar' className='avatar' />
        </div>
        <div className='comment-body'>
          <div className='username'>{username}</div>
          <div className='comment-text'>{body}</div>
        </div>
      </div>
      {showDeleteButton
        ? <div className='cursor-pointer' onClick={deleteUserComment}>
            <i className="fa fa-trash"></i>
          </div>
        : <></>
      }
      <style>{`
        .comment {
          border-top: 1px solid #07080b;
          min-height: 70px;
          width: 100%;
          flex: 1;
          padding: 18px 14px;
        }
        .user-comment-avatar img {
          border-radius: 100%;
          width: 50px;
          height: 50px;
        }
        .comment-body {
          margin: 0 14px;
        }
        .fa-trash {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default Comment;
