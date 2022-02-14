import axios from 'axios';
import { getUserFromStorage } from '../store/auth/reducer';
export default class API {
  getHeaders() {

    const token = getUserFromStorage()?.token;
    if (token) {
      return {
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json; charset=utf-8'
        }
      }
    }
  }

  call(props) {
    const { type, uri, params = {}, payload = {} } = props;
    switch(type) {
      case 'GET': return axios.get(uri, {...params, ...this.getHeaders()})
                    .then(({ data }) => {
                      return new Promise((resolve) => {
                        return resolve(data);
                      });
                    })
                    .catch(function (error) {
                      return new Promise((_, reject) => {
                        return reject(error);
                      });
                    });
      case 'POST': return axios.post(uri, payload, this.getHeaders())
                    .then(({ data }) => {
                      return new Promise((resolve) => {
                        return resolve(data);
                      });
                    })
                    .catch(function (error) {
                      return new Promise((_, reject) => {
                        return reject(error);
                      });
                    });
      case 'DELETE': return axios.delete(uri, this.getHeaders());
      default: ;
    }
  }
}
