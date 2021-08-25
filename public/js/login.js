/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
export const login = async (email, password) => {
  // console.log('LOGIN');
  // console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/api/v1/users/login', //http://127.0.0.1:5000
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged In successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log(err.response);
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:5000/api/v1/users/logout', //http://127.0.0.1:5000
    });

    if ((res.data.status = 'success')) {
      location.reload(true);
    }
  } catch (err) {
    showAlert('error', 'Erro logging out! Try again.');
  }
};
