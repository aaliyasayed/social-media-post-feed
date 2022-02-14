import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../store/feed/actions';
import { getCommentsBySlug } from '../../store/feed/actions';
import { toggleLoginModal } from '../../store/auth/actions';
import Comment from './comment';

const CommentList = ({slug, onDemandLoad}) => {
  const dispatch = useDispatch();
  const commentEditorRef = useRef(null);

  const { comments } = useSelector(state => state.Feed);
  const { isLoggedIn } = useSelector(state => state.Auth);

  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(!onDemandLoad)

  useEffect(() => {
    if (showComments) {
      dispatch(getCommentsBySlug(slug));
    }
  }, [dispatch, showComments, slug]);

  const checkLogin = () => {
    if (!isLoggedIn) {
      dispatch(toggleLoginModal(true));
    }
  }

  const handleComment = () => {
    if (isLoggedIn) {
      setComment(commentEditorRef.current.textContent);
    }
  };

  const resetCommentEditorBox = () => {
    commentEditorRef.current.textContent = '';
  };

  const handlePostComment = () => {
    if (isLoggedIn && comment) {
      dispatch(postComment({ slug, comment }));
      setComment('');
      resetCommentEditorBox();
    }
    if (!isLoggedIn) {
      dispatch(toggleLoginModal(true));
    }
  };

  const toggleComments = () => setShowComments(!showComments);

  return (
    <div className='comment-wrapper'>
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
              <div ref={commentEditorRef} className='comment-editor' contentEditable={isLoggedIn} placeholder='Comment on this...' onClick={checkLogin} onInput={handleComment}></div>
            </div>
          </div>
          <div className='btn-post-comment' onClick={handlePostComment}>
            <i className="fa fa-share-square"></i>
          </div>
        </div>

        <div className='comment-list'>
          {comments[slug]?.map((comment, key) => <Comment key={key} {...comment} slug={slug} />)}
        </div>
      </div>}
    </div>
  );
};

export default CommentList;
