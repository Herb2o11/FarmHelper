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
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getEggChickenCalculator(id) {
  
  try {
    let response = await axios.get('/calchickeneggs/'+id);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
}



;