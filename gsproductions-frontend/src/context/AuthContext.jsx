import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const API = axios.create({
  baseURL: "https://localhost:7051/api", // backend API
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (identifier, password) => {
    try {
      const res = await API.post("/auth/login", { identifier, password });
      
      // Directly store full DTO from backend
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);

      return res.data;
    } catch (error) {
      throw error;
    }
  };

  const register = async (username, email, password) => {
    await API.post("/auth/register", { username, email, password });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
