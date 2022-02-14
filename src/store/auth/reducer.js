import ACTION from '../../constants/actions';

export const getUserFromStorage = () => {
  const user = sessionStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

const initialState = {
  user : getUserFromStorage() || {
    bio: null,
    email: null,
    image: null,
    token: null,
    username: null
  },
  loginError: null,
  isLoggedIn: !!getUserFromStorage() || false,
  loginModal: false
};

export default function userLogin(state = initialState, actions) {
  switch (actions.type) {
    case ACTION.LOGIN: {
      return {
        ...state,
        user: actions.payload.user,
        isLoggedIn: true
      };
    }
    case ACTION.TOGGLE_LOGIN_MODAL: {
      return {
        ...state,
        loginModal: actions.payload,
        loginError: null
      }
    }
    case ACTION.LOGIN_ERROR: {
      return {
        ...state,
        loginError: actions.payload
      }
    }
    case ACTION.LOGOUT: {
      return {
        ...state,
        user: {},
        isLoggedIn: false
      }
    }
    default: return state;
  }
};
