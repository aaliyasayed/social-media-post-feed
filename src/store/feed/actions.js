import ACTION from '../../constants/actions';
import { fetchFeeds } from '../../services';

export const getAllFeedPosts = () => async (dispatch) => {
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

