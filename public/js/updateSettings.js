/* eslint-disable */
// updateData
import axios from 'axios';
import { showAlert } from './alerts';
// type is either 'password or data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe'; //http://127.0.0.1:5000
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} Updated SuccessFully`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
