import ACTION from '../../constants/actions';
import { fetchFeeds, fetchPost, fetchCommentsBySlug, postUserComment, deleteUserComment } from '../../services';

export const getAllFeed = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    const response = await fetchFeeds();
    dispatch({
      type: ACTION.FEEDS,
      payload: response
    });
    dispatch(hideLoader());
  } catch (error) {
    console.error(error.message);
  }
};

export const getPost = (slug) => async (dispatch) => {
  try {
    dispatch(showLoader());
    const response = await fetchPost(slug);
    dispatch({
      type: ACTION.POST,
      payload: response
    })
    dispatch(hideLoader());
  } catch (error) {
    console.error(error.message);
  }
};

export const getCommentsBySlug = (slug) => async (dispatch, getState) => {
  try {
    const comments = getState().Feed.comments;
    const response = await fetchCommentsBySlug(slug);

    const result = {
      ...comments,
      [slug]: response.comments
    }

    dispatch({
      type: ACTION.COMMENTS,
      payload: result
    })

  } catch (error) {
    console.error(error.message);
  }
};

export const postComment = ({slug, comment}) => async (dispatch, getState) => {
  try {
    const comments = getState().Feed.comments;
    const response = await postUserComment({slug, comment});
    let result;
    if (comments[slug]) {
      result = { ...comments, [slug]: [ ...comments[slug], response.comment ]};
    } else {
      result = { ...comments, [slug]: response.comment };
    }
    dispatch({
      type: ACTION.POST_COMMENTS,
      payload: result
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteComment = ({slug, id}) => async (dispatch, getState) => {

  try {
    const comments = getState().Feed.comments;
    const modifiedComments = { ...comments};
    const slugIndex = modifiedComments[slug].findIndex((o) => o.id === id);
    if (slugIndex !== -1) {
      modifiedComments[slug].splice(slugIndex, 1);
    }
    const updatedCommentList = {...comments, [slug]: modifiedComments[slug]};

    await deleteUserComment({slug, id});
    dispatch({
      type: ACTION.DELETE_COMMENT,
      payload: updatedCommentList
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const showLoader = () => ({ type: ACTION.LOADER, payload: true });

export const hideLoader = () => ({ type: ACTION.LOADER, payload: false });
