import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from 'api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await authApi.register(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        Notify.failure('Invalid data');
      }
      if (error.response.status === 500) {
        Notify.failure('Oops! Something is wrong. Please, try one more time.');
      }

      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await authApi.logIn(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 400) {
        Notify.failure('Заполните обязательные поля');
      }
      if (error.response.status === 500) {
        Notify.failure('Упс! Что-то пошло не так, попробуйте еще раз');
      }

      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await authApi.logOut();
    token.unset();
  } catch (error) {
    console.log(error.message);
    if (error.response.status === 401) {
      Notify.failure(error.response.statusText);
    }
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const persistedToken = thunkAPI.getState().auth.token;
      if (!persistedToken) {
        return thunkAPI.rejectWithValue();
      }

      token.set(persistedToken);
      const result = await authApi.getCurrentUser();
      return result;
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 400) {
        Notify.failure('Invalid data');
      }
      if (error.response.status === 500) {
        Notify.failure('Oops! Something is wrong. Please, try one more time.');
      }
      if (error.response.status === 401) {
        Notify.failure(error.response.statusText);
      }
    }
  }
);
