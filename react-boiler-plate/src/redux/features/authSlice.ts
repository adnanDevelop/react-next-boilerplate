import { createSlice } from '@reduxjs/toolkit';
import authApi from '../services/authApi';
import { getCookie, setCookie, removeCookie } from '@/utils/cookies';
import decodeToken from '@/utils/tokenDecode';

interface IUser {
  data: any;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string;
  user: any;
  role: string;
  permissions: string[];
}

const initialState: AuthState = {
  isAuthenticated: !!getCookie('token'),
  token: getCookie('token') || '',
  user: JSON.parse(getCookie('user') || '{}'),
  role: JSON.parse(getCookie('user') || '{}').roleType,
  permissions: decodeToken(getCookie('token') || '')?.Permissions || [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = '';
      state.user = '';
      state.role = '';
      state.permissions = [];
      removeCookie('token');
      removeCookie('user');
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.user = (action?.payload?.response as IUser)?.data || '';
        state.role = (action?.payload?.response as IUser)?.data?.roleType || '';
        state.permissions =
          decodeToken(action.payload.token)?.Permissions || [];
        setCookie('token', action.payload.token);
        setCookie(
          'user',
          JSON.stringify((action?.payload?.response as IUser)?.data || ''),
        );
      },
    );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
