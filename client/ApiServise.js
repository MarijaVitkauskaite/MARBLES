const BASE_URL = 'http://10.10.22.151:3000';

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

apiService.sendHabits = (habits) => {
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

apiService.getHabits = () => {
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