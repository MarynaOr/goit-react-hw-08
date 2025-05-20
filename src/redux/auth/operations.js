import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const swaggerApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setAuthHeader = (token) => {
  swaggerApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete swaggerApi.defaults.headers.common.Authorization;
};

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (body, thunkAPI) => {
    try {
      const response = await swaggerApi.post("users/signup", body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (body, thunkAPI) => {
    try {
      const response = await swaggerApi.post("users/login", body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLogout = createAsyncThunk(
  "logout/fetchLogout",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (!token) {
        return thunkAPI.rejectWithValue("Токен відсутній");
      }
      setAuthHeader(token);

      await swaggerApi.post("users/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;

      if (!savedToken) {
        return thunkAPI.rejectWithValue("Token is not exist!");
      }
      setAuthHeader(savedToken);
      const response = await swaggerApi.get("users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// // orlean@buety.com
