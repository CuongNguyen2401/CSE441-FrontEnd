import axios, {AxiosInstance} from 'axios';
import env from '../config/env.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Http {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: env.apiUrl,
      timeout: env.apiTimeout,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.setupInterceptors();
  }

  // setupInterceptors is for pre-setup using authentication token (Bearer token)
  private setupInterceptors(): void {
    this.instance.interceptors.request.use(
      async config => {
        const token = await AsyncStorage.getItem('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: Promise<any>) => {
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;

        // Handle 401 Unauthorized errors (token expired)
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            // Try to refresh token
            const refreshToken = await AsyncStorage.getItem('refresh_token');
            if (refreshToken) {
              const response = await axios.post(`${env.apiUrl}/auth/refresh`, {
                refreshToken,
              });

              const {token} = response.data;
              await AsyncStorage.setItem('auth_token', token);

              // Retry the original request with the new token
              originalRequest.headers.Authorization = `Bearer ${token}`;
              return axios(originalRequest);
            }
          } catch (refreshError) {
            // If refresh fails, redirect to login
            await AsyncStorage.removeItem('auth_token');
            await AsyncStorage.removeItem('refresh_token');
          }
        }
        return Promise.reject(error);
      },
    );
  }
}

const axiosHttp = new Http().instance;
export default axiosHttp;
