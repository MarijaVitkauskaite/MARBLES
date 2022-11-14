const BASE_URL = 'http://192.168.0.30:3000';

const apiService = {};

apiService.register = (user) => {
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.login = (user) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.habits = (habits) => {
  return fetch(`${BASE_URL}/habits`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(habits),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.habits = () => {
  return fetch(`${BASE_URL}/habits`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// apiService.logout = () => {
//   return fetch(`${BASE_URL}/logout`, {
//     method: 'POST',
//     credentials: 'include',
//     mode: 'cors',
//     headers: { 'Content-Type': 'application/json' },
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

export default apiService;