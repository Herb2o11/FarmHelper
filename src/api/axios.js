/**
 * Axios documentation: https://github.com/axios/axios
 */
const axios = require('axios').default;

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 4000,
  validateStatus: function(status) {
    if(status >= 200 && status < 400 ) {
      return true;
    }
    return false;
  }
});

// Alter defaults after instance has been created
instance.interceptors.request.use(function(request){
  const authToken = getAuthToken();
  if(authToken !== '') {
    request.headers.Authorization = 'Bearer ' + authToken;
    // console.log(authToken);
  }
  console.log("REQUEST DATA", request.data);
  return request;
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response.data.message !== undefined) {
    throw new Error(error.response.data.message);
  }
  throw error;
});

function getAuthToken() {
  const authToken = localStorage.getItem('AUTH_TOKEN');
  if(authToken == null) {
    return '';
  } else {
    return `${authToken}`;
  }
};

export default instance;