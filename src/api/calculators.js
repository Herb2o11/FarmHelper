import axios from "./axios";

export async function getCalculators() {
 
  try {
    let response = await axios.get('/calculators');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function postEggCalculator(datainfo) {
  try {
    let response = await axios.post('/calchickeneggs', datainfo);
    console.log("response", response);
  } catch (error) {
    throw error;
  }

}

export async function postBroilerCalculator(datainfo) {
  try {
    let response = await axios.post('/calchickenbroiler', datainfo);
    console.log("response", response);
  } catch (error) {
    throw error;
  }

}


export async function getBroilerCalculator(id) {
  
  try {
    let response = await axios.get('/calchickenbroiler/'+id);
    console.log(response);
  //   let response = {
  //   "data": {
  //     chickens: 400,
  //     area: 0,
  //     food: 0,
  //     eggs: 0,
  //     lockedfields: [false,false,false,false],
  //     chickPrice: 1.00,
  //     chickenPrice: 4.00,
  //     foodPrice: 1.00,
  //     eggsPrice: 0.75,
  //     rent: 50.00,
  //     staff: 75.00,
  //     chickenMaturity : 20,
  //     eggsMaturity: 7,
  //     deathRate: 2,
  //     period: 12
  //   }
  // };

  
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getEggChickenCalculator(id) {
  
  try {
    let response = await axios.get('/calchickeneggs/'+id);
    console.log(response);
  //   let response = {
  //   "data": {
  //     chickens: 400,
  //     area: 0,
  //     food: 0,
  //     eggs: 0,
  //     lockedfields: [false,false,false,false],
  //     chickPrice: 1.00,
  //     chickenPrice: 4.00,
  //     foodPrice: 1.00,
  //     eggsPrice: 0.75,
  //     rent: 50.00,
  //     staff: 75.00,
  //     chickenMaturity : 20,
  //     eggsMaturity: 7,
  //     deathRate: 2,
  //     period: 12
  //   }
  // };

  
    return response.data;
  } catch (error) {
    throw error;
  }
}



;