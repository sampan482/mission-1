
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Dummy user for validation
const FAKE_USER = {
  email: 'test@example.com',
  password: 'password',
  name: 'NAME',
};

interface LoginCredentials {
  email?: string | null;
  password?: string | null;
}

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: LoginCredentials, thunkAPI) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      return { name: FAKE_USER.name, email: FAKE_USER.email };
    } else {
      return thunkAPI.rejectWithValue('Invalid credentials');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null as { name: string; email: string } | null,
    isAuthenticated: false,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
