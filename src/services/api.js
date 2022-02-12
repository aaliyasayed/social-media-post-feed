import axios from 'axios';
export default class API {

  call(props) {
    const { type, uri, params = {}, payload = {} } = props;
    switch(type) {
      case 'GET': return axios.get(uri, params)
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
      case 'POST': return axios.post(uri, payload)
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
      default: ;
    }
  }
}
