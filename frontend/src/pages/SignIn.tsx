// Signin page
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state: { auth: AuthState }) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Signin");
    }
  });

  interface LoginCredentials {
    email: string;
    password: string;
  }

  interface AuthState {
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials: LoginCredentials = { email, password };
    dispatch(loginUser(credentials));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-xl p-8  space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Login</h2>

        <input
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-400 hover:bg-blue-200 text-white font-semibold py-2 px-4 rounded-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="text-sm text-red-300 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
