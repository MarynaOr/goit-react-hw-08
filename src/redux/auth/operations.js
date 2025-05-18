import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const swaggerApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setAuthHeader = (token) => {
  swaggerApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  //  console.log('Auth header set:', swaggerApi.defaults.headers.common.Authorization);
// console.log('setAuthHeader called, token:', token);
};

export const clearAuthHeader = () => {
  swaggerApi.defaults.headers.common.Authorization = '';
};
// console.log('Auth header:', swaggerApi.defaults.headers.common.Authorization);
export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (body, thunkAPI) => {
    try {
      const { data } = await swaggerApi.post("users/signup", body);
      //  localStorage.setItem('token', data.token);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (body, thunkAPI) => {
    try {
      const { data } = await swaggerApi.post("users/login", body);
 console.log('Received token:', data.token);     
      localStorage.setItem("token", data.token);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
       console.log('Login error:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLogout = createAsyncThunk(
  "logout/fetchLogout",
  async (_, thunkAPI) => {
    try {
      await swaggerApi.post("users/logout");
      localStorage.removeItem("token");
      return
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);




export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const persistedToken = thunkAPI.getState().auth.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Token does not exist');
      }
      setAuthHeader(persistedToken);
      const { data } = await api.get('/users/current');
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);
// orlean@buety.com
