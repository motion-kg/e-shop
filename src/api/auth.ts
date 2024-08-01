import axios from 'axios';

interface LoginResponse {
  token: string;
}

export const authAPI = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    const response = await axios.post('https://fakestoreapi.com/auth/login', {
      username,
      password
    });
    return response.data;
  },
};
