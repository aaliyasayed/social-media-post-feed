import API from './api';
const api = new API();

export const login = (payload = {'user':{'email': 'dasdasd@gmail.com', 'password': 'dsfafsdfsd'}}) => {
  const uri = 'https://api.realworld.io/api/users/login';
  return api.call({type: 'POST', uri, payload});
};

export const fetchFeeds = (limit = 10, offset = 0) => {
  const uri = `https://api.realworld.io/api/articles?limit=${limit}&offset=${offset}`;
  return api.call({type: 'GET', uri});
};

const services = {
  login,
  fetchFeeds
};
export default services;
