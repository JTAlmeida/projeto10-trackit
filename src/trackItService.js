import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("trackit"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };
  return config;
}

function signUp(body) {
  const signUpAPI = `${BASE_URL}/auth/sign-up`;
  return axios.post(signUpAPI, body);
}

function signIn(body) {
  const signInAPI = `${BASE_URL}/auth/login`;
  return axios.post(signInAPI, body);
}

function postHabits(body) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/habits`, body, config);
  return promise;
}

function getHabits() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits`, config);
  return promise;
}

function deleteHabit(habitId) {
  const config = createHeaders();
  const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, config);
  return promise;
}

function getTodayHabits() {
  const config = createHeaders();
  const promise = axios.get(`${BASE_URL}/habits/today`, config);
  return promise;
}

function selectTodayHabit(habitID) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/habits/${habitID}/check`, {}, config);
  return promise;
}

function deselectTodayHabit(habitID) {
  const config = createHeaders();
  const promise = axios.post(
    `${BASE_URL}/habits/${habitID}/uncheck`,
    {},
    config
  );
  return promise;
}

export {
  signUp,
  signIn,
  postHabits,
  getHabits,
  deleteHabit,
  getTodayHabits,
  selectTodayHabit,
  deselectTodayHabit,
};
