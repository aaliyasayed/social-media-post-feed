import { login } from '../../services';
import ACTION from '../../constants/actions';

export const authenticateUser = () => async (dispatch) => {
  try {
    const response = await login();
    dispatch({
      type: ACTION.LOGIN,
      payload: response
    });
  } catch (error) {
    console.error(error.message);
  }
};
