//====== jason data
import loginData from '../test-data/loginData.json' assert { type: 'json' };

export { loginData };


//======.env file data
export const envLoginData = {
  username: process.env.VALID_USERNAME,
  password: process.env.VALID_PASSWORD,
  successMessage: 'You logged into a secure area'
};
