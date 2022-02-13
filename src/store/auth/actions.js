import { login } from '../../services';
import ACTION from '../../constants/actions';

export const authenticateUser = (params) => async (dispatch) => {
  try {
    const response = await login(params);
    dispatch({
      type: ACTION.LOGIN,
      payload: response
    });
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: ACTION.LOGIN_ERROR,
      payload: 'Something Went Wrong.'
    })
  }
};

export const toggleLoginModal = (flag = true) => (dispatch) => {
  dispatch({
    type: ACTION.TOGGLE_LOGIN_MODAL,
    payload: flag
  });
}
