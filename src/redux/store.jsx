import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import counterSlice from './counterSlice';
import colorSlice from './colorSlice';
import userPageSlice from './userPageSlice';
import userPage1Slice from './userPage1Slice';

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    userReducer: userSlice,
    counterReducer: counterSlice,
    colorReducer: colorSlice,
    userPageReducer: userPageSlice,
    userPage1Reducer: userPage1Slice,
  },
});
