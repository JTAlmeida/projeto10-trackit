import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';


function signUp(body){
  const signUpAPI = `${BASE_URL}/auth/sign-up`;
  return axios.post(signUpAPI, body);
}

function signIn(body){
  const signInAPI = `${BASE_URL}/auth/login`;
  return axios.post(signInAPI, body);
}

export {signUp, signIn};