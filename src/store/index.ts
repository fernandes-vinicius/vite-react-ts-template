import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import rootReducer, { RootState } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
