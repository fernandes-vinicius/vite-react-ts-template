import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import rootReducer, { RootState } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: !import.meta.env.PROD,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
