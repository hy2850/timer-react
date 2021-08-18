import { configureStore } from '@reduxjs/toolkit';
import notiReducer from '../slices/notiSlice';

export const store = configureStore({
  reducer: {
    notification: notiReducer,
  },
  // 이름 중요? notification:
});
