import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../store/feed/actions';
import { getCommentsBySlug } from '../../store/feed/actions';
import { toggleLoginModal } from '../../store/auth/actions';

const CommentSection = ({slug, onDemandLoad}) => {
  const dispatch = useDispatch();
  const { comments } = useSelector(state => state.Feed);
  const { isLoggedIn } = useSelector(state => state.Auth);

  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(!onDemandLoad)

  useEffect(() => {
    if (showComments) {
      dispatch(getCommentsBySlug(slug));
    }
  }, [slug, showComments]);

  const checkLogin = () => {
    if (!isLoggedIn) {
      dispatch(toggleLoginModal(true));
    }
  }

  const handleComment = (e) => {
    if (isLoggedIn) {
      setComment(e?.target?.textContent);
    }
  };

  const handlePostComment = () => {
    const payload = {comment: { body: comment }};
    dispatch(postComment({ slug, payload }));
  };

  const toggleComments = () => setShowComments(!showComments);

  return (
    <div>
      {onDemandLoad &&
        <div className='toggle-comments' onClick={toggleComments}>
          {showComments
            ? <div className='hide-comment'>Hide Comments</div>
            : <div className='show-comment'>Show Comments</div>
          }
        </div>
      }
      {showComments && <div className='comment-container d-flex flex-column'>
        <div className='add-comment-container d-flex align-items-center justify-content-between'>
          <div className='comment-text-container d-flex'>
            <div className='comment-user-avatar'>
              <img src='https://www.bugheist.com/static/images/dummy-user.png' alt='Avatar' className='avatar' />
            </div>
            <div className='comment-box d-flex align-items-center'>
              <div className='comment-editor' contentEditable={isLoggedIn} placeholder='Comment on this...' onClick={checkLogin} onInput={(e) => handleComment(e)}></div>
            </div>
          </div>
          <div className='btn-post-comment' onClick={handlePostComment}>
            <i className="fa fa-share-square"></i>
          </div>
        </div>

        <div className='comment-list'>
          {comments?.map((comment, key) => <Comment key={key} {...comment} />)}
        </div>
      </div>}
      <style>{`
        .toggle-comments {
          color: #3677ef;
        }
        .show-comment {
          padding: 0 14px;
        }
        .hide-comment {
          border-bottom: 1px solid #07080b;
          padding: 21px 14px;
        }
        .comment-container {
          width: 100%;
        }
        .comment-user-avatar img {
          border-radius: 100%;
          width: 50px;
          height: 50px;
        }
        .comment-box {
          margin-left: 14px;
          width: 90%;
        }
        .add-comment-container {
          padding: 10px 14px;
        }
        .comment-text-container {
          width: 100%;
        }
        .comment-editor {
          min-height: 38px;
          max-height: 400px;
          flex: 1;
          outline: none;
        }
        .comment-editor[placeholder]:empty:before {
          content: attr(placeholder);
          color: #54617b;
        }

        .btn-post-comment .fa {
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

const Comment = (props) => {
  const { author, body} = props;
  const { username, image } = author;

  return (
    <div className='comment d-flex'>
      <div className='user-comment-avatar'>
        <img src={image} alt='Avatar' className='avatar' />
      </div>
      <div className='comment-body'>
        <div className='username'>{username}</div>
        <div className='comment-text'>{body}</div>
      </div>
      <div><i className="fa fa-trash"></i></div>
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
      `}</style>
    </div>
  );
}

export default CommentSection;
