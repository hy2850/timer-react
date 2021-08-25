import { configureStore } from '@reduxjs/toolkit';
import notiReducer from '../slices/notiSlice';

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {combineReducers} from "redux";

const persistConfig = {
  key: 'root',
  storage: storage,
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, notiReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
