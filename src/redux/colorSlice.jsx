import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  colorId: 0,
  color: 'red',
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeColor: (state) => {
      state.colorId++;
      state.colorId %= 3;
      switch (state.colorId) {
        case 0:
          state.color = 'red';
          break;
        case 1:
          state.color = 'green';
          break;
        case 2:
          state.color = 'blue';
          break;
      }
    },
  },
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;
