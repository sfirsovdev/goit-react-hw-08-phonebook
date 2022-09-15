import axios from 'axios';

export async function register(newUser) {
  const { data } = await axios.post('/users/signup', newUser);
  return data;
}

export async function logIn(user) {
  const { data } = await axios.post('/users/login', user);
  return data;
}

export async function logOut() {
  const { data } = await axios.post('/users/logout');
  return data;
}

export async function getCurrentUser() {
  const { data } = await axios.get('/users/current');
  return data;
}
