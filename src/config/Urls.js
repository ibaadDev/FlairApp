export const API_BASED_URL =
  'http://127.0.0.1:8000/api/auth/';

  export const getApi = endpoint => API_BASED_URL + endpoint;
  export const LoginUrl = getApi('login');
  export const SignUpUrl = getApi('signup');