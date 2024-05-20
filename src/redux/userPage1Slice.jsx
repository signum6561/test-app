import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('users/fetchUsers', async () => {
  const data = await fetch('https://reqres.in/api/users?page=1');
  const userList = await data.json();
  return userList.data;
});

const initialState = {
  status: 'idle',
  users: [],
};

const userPage1Slice = createSlice({
  name: 'userPage1',
  initialState,
  reducers: {
    filterUserById: (state) => {
      if (state.status == 'success')
        state.users = state.users.filter((user) => user.id <= 4);
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

export const { filterUserById } = userPage1Slice.actions;

export default userPage1Slice.reducer;
