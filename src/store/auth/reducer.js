import ACTION from '../../constants/actions';

const initialState = {
  bio: null,
  email: null,
  image: null,
  token: null,
  username: null
};

export default function userLogin(state = initialState, actions) {
  switch (actions.type) {
    case ACTION.LOGIN: {
      return {
        ...state,
        ...actions.payload.user
      };
    }
    default: return state;
  }
};
