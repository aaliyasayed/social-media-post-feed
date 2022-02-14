import API from './api';
const api = new API();

export const login = (params) => {
  const payload = {user: params};
  const uri = 'https://api.realworld.io/api/users/login';
  return api.call({type: 'POST', uri, payload});
};

export const fetchFeeds = (limit = 10, offset = 0) => {
  const uri = `https://api.realworld.io/api/articles?limit=${limit}&offset=${offset}`;
  return api.call({type: 'GET', uri});
};

export const fetchPost = (slug) => {
  const uri = `https://api.realworld.io/api/articles/${slug}`;
  return api.call({type: 'GET', uri});
};

export const fetchCommentsBySlug = (slug) => {
  const uri = `https://api.realworld.io/api/articles/${slug}/comments`;
  return api.call({type: 'GET', uri});
};

export const postUserComment = ({slug, comment}) => {
  const payload = {comment: { body: comment }};
  const uri = `https://api.realworld.io/api/articles/${slug}/comments`;
  return api.call({type: 'POST', uri, payload});
};

export const deleteUserComment = ({slug, id}) => {
  const uri = `https://api.realworld.io/api/articles/${slug}/comments/${id}`;
  return api.call({type: 'DELETE', uri});
};
