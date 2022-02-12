import ACTION from '../../constants/actions';

const initialState = {
  articles: [],
  articlesCount: null
};
export default function getFeeds(state = initialState, actions) {
  switch (actions.type) {
    case ACTION.FEEDS: {
      return {
        ...state,
        ...actions.payload
      };
    }
    default: return state;
  }
};
