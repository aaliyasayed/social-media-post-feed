import ACTION from '../../constants/actions';
import { fetchFeeds, fetchPost, fetchCommentsBySlug, postUserComment } from '../../services';

export const getAllFeed = () => async (dispatch) => {
  try {
    const response = await fetchFeeds();
    dispatch({
      type: ACTION.FEEDS,
      payload: response
    });
  } catch (error) {
    console.error(error.message);
    // dispatch({
    //   payload: error.message,
    //   type: 'ERROR'
    // });
  }
};

export const getPost = (slug) => async (dispatch) => {
  try {
    const response = await fetchPost(slug);
    dispatch({
      type: ACTION.POST,
      payload: response
    })
  } catch (error) {
    console.error(error.message);
  }
};

export const getCommentsBySlug = (slug) => async (dispatch) => {
  try {
    const response = await fetchCommentsBySlug(slug);
    dispatch({
      type: ACTION.COMMENTS,
      payload: response
    })
  } catch (error) {
    console.error(error.message);
  }
};

export const postComment = (payload) => async (dispatch) => {
  try {
    const response = await postUserComment(payload);
    dispatch({
      type: ACTION.POST_COMMENTS,
      payload: response
    })
  } catch (error) {
    console.error(error.message);
  }
};
