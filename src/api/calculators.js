export async function getCalculators() {
 
  try {
    const response = {
      data : [
        {
          id: 1,
          kind: 'chicken',
          name: 'Main project',
          animals: 500,
        },
        {
          id: 2,
          kind: 'chicken',
          name: 'Kelowna Test',
          animals: 400,
        }
      ]
    }
    console.log("Returning", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function getEggChickenCalculator(id) {
  const details = {
    id: id,
  };

  try {
  //   let response = await axios.post('/api/signup', qs.stringify(details), {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   });
    /**
     * Temp!!! REMOVE-ME
     */
  let response = {
    "data": {
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
      period: 12
    }
  };
    return response.data;
  } catch (error) {
    throw error;
  }
};