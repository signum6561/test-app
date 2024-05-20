import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('users/fetchUsers', async () => {
  const data = await fetch('https://reqres.in/api/users?page=2');
  const userList = await data.json();
  return userList.data;
});

const initialState = {
  status: 'idle',
  users: [],
};

const userPageSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    filterUser: (state) => {
      state.users = state.users.filter((user) => user.id > 9);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, function (state, action) {
        state.status = 'success';
        state.users = [...action.payload];
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { filterUser } = userPageSlice.actions;

export default userPageSlice.reducer;
