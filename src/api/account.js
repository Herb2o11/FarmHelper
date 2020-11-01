import axios from "./axios";
// import qs from "qs"

export function isAuthenticated() {
  const logged = localStorage.getItem('AUTH_TOKEN');
  // console.log('[isAuthenticated]', logged);
  if(logged != null) {
    return true;
  }
  return false;
};

export function logOut() {
  localStorage.removeItem('AUTH_TOKEN');
}

export async function logIn(username, password) {
  const details = {
    username: username,
    password: password
  };

  try {
    let response = await axios.post('/authenticate', details );
    if(response.data !== undefined && response.data.token !== undefined)
    localStorage.setItem('AUTH_TOKEN', response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function signUp(username, password) {
  const details = {
      username: username,
      password: password,
  };

  try {
    let response = await axios.post('/newuser', details);
    return response.data;
  } catch (error) {
    throw error;
  }
};