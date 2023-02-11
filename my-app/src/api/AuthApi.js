import axios from 'axios';
import { config } from '../config';

const AuthApi = {
  Login: (ssoTypeId, userSsoId, ssoAccessToken, firstName, lastName) => {
    return axios.post(`${config.apiBaseUrl}/Auth/Login`, {
      userSsoId: userSsoId,
      ssoTypeId: ssoTypeId,
      ssoAccessToken: ssoAccessToken,
      firstName: firstName,
      lastName: lastName,
    })
    .then(response => response.data);
  },
}

export default AuthApi;