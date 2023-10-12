// src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counterReducer from './slices/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
