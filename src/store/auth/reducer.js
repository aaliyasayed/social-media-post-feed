import ACTION from '../../constants/actions';

const initialState = {
  user : {
    bio: null,
    email: null,
    image: null,
    token: null,
    username: null
  },
  loginError: null,
  isLoggedIn: false,
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
    default: return state;
  }
};
