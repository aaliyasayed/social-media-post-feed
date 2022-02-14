import { login } from '../../services';
import ACTION from '../../constants/actions';

export const authenticateUser = (params) => async (dispatch) => {
  try {
    const response = await login(params);
    sessionStorage.setItem('user', JSON.stringify(response.user));
    dispatch({
      type: ACTION.LOGIN,
      payload: response
    });
    dispatch(toggleLoginModal(false));
    refreshPage();
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
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: ACTION.LOGOUT
  });
  sessionStorage.removeItem('user');
  refreshPage();
}

export const refreshPage = () => {
  window.location.reload(false);
}
