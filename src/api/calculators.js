export async function getChickenCalculators() {
 
  try {
    const response = {
      data : [
        {
          chickens: 500,
          area: 0,
          food: 0,
          eggs: 0,
          lockedfields: [false,false,false,false],
          chickPrice: 1.00,
          chickenPrice: 4.00,
          foodPrice: 1.00,
          eggsPrice: 0.75,
          rent: 50.00,
          staff: 75.00,
          chickenMaturity : 20,
          eggsMaturity: 7,
          deathRate: 2,
          period: 12
        },
        {
          chickens: 400,
          area: 0,
          food: 0,
          eggs: 0,
          lockedfields: [false,false,false,false],
          chickPrice: 1.00,
          chickenPrice: 4.00,
          foodPrice: 1.00,
          eggsPrice: 0.75,
          rent: 50.00,
          staff: 75.00,
          chickenMaturity : 20,
          eggsMaturity: 7,
          deathRate: 2,
          period: 24
        }
      ]
    }
    return response.data;
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