import ACTION from '../../constants/actions';

const initialState = {
  feeds: {
    articles: [],
    articlesCount: null
  },
  post: {
    author: {
      bio: null,
      image: null,
      username: null,
      followedBy: null
    },
    title: null,
    body: null,
    favorited: null,
    favoritesCount: null,
  },
  comments: {},
  loading: false
};

export default function getFeeds(state = initialState, actions) {
  switch (actions.type) {
    case ACTION.FEEDS: {
      return {
        ...state,
        feeds: actions.payload
      };
    }
    case ACTION.POST: {
      return {
        ...state,
        post: actions.payload.article
      }
    }
    case ACTION.COMMENTS: {
      return {
        ...state,
        comments: actions.payload
      }
    }
    case ACTION.POST_COMMENTS: {
      return {
        ...state,
        comments: actions.payload
      }
    }
    case ACTION.DELETE_COMMENT: {
      console.log({payload: actions.payload})
      return {
        ...state,
        comments: actions.payload
      }
    }
    case ACTION.LOADER: {
      return {
        ...state,
        loading: actions.payload
      };
    }
    default: return state;
  }
};
