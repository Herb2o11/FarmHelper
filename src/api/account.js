
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
    // let response = await axios.post('/api/login', qs.stringify(details), {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // });
    /**
     * Temp!!! REMOVE-ME
     */
    const response = {}
    if(details.password) {
      response.data = { "token": 'XXAUTHENTICATEDXXX'};
    } else {
      response.data = { "token": false};
    }
    localStorage.setItem('AUTH_TOKEN', response.data.token);
    return response.data.token;
  } catch (error) {
    throw error;
  }
};

export async function signUp(firstName, lastName, username, password) {
  // const details = {
  //     username: username,
  //     password: password,
  //     first_name : firstName,
  //     last_name : lastName
  // };

  // try {
  //   let response = await axios.post('/api/signup', qs.stringify(details), {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   });
    /**
     * Temp!!! REMOVE-ME
     */
    let response = {"data": { "token": 'XXAUTHENTICATEDXXX'}};
     return response.data.token;
  // } catch (error) {
  //   throw error;
  // }
};