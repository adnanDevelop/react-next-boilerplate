import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';

// slices
import authSlice from './features/authSlice';

// apis
import authApi from './services/authApi';
import organizationApi from './services/organizationApi';
import roleApi from './services/roleApi';
import teamApi from './services/teamApi';
import userApi from './services/userApi';

export const store: any = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [organizationApi.reducerPath]: organizationApi.reducer,
    [roleApi.reducerPath]: roleApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      organizationApi.middleware,
      roleApi.middleware,
      teamApi.middleware,
      userApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// for rtk query
setupListeners(store.dispatch);

// custom hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
