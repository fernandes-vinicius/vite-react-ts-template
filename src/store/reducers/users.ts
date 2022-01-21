import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '@/services/api';
import { RootState } from '@/store/rootReducer';

export interface IUser {
  name: string;
  age: number;
}

type UserState = {
  users: IUser[];
  loadingUsers: boolean;
};

// async thunks

export const fetchUserApi = createAsyncThunk('users/fetchUserApi', async () => {
  const response = await api.get('users');
  return response.data.data as IUser[];
});

// reducer

const initialState = {
  users: [],
  loadingUsers: false,
} as UserState;

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Fetch users
    builder.addCase(fetchUserApi.pending, state => {
      state.loadingUsers = false;
    });
    builder.addCase(fetchUserApi.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchUserApi.rejected, state => {
      state.loadingUsers = false;
    });
  },
});

// selectors

export const usersSelector = (state: RootState) => state.users;

export default usersSlice.reducer;
